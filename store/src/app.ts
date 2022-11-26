import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@apa_malaghe/utility';

import { indexStoreRouter } from './routes/index';
import { newStoreRouter } from './routes/new';


import { updateMagRouter } from './routes/patch';
import { showMagRouter } from './routes/show';
import { deleteMagRouter } from './routes/delete'

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV != 'test',
  })
);
app.use(currentUser);

app.use(indexStoreRouter);
app.use(newStoreRouter);

app.use(showMagRouter);
app.use(updateMagRouter);
app.use(deleteMagRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
