import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError, currentUser } from '@apa_malaghe/utility'

//store routes
import { indexStoreRouter } from './routes/store/index-store'
import { newStoreRouter } from './routes/store/new-store'
import { findByIDStoreRouter } from './routes/store/findbyid-store'

//orders routes
import { indexOrderRouter } from './routes/orders/index-orders'
import { newOrderRouter } from './routes/orders/new-orders'
import { findByIDOrdersRouter } from './routes/orders/findbyid-orders'

//auth routes
import { currentUserRouter } from './routes/auth/current-user'
import { signinRouter } from './routes/auth/signin'
import { signoutRouter } from './routes/auth/signout'
import { signupRouter } from './routes/auth/signup'
import { findByIDAuthRouter } from './routes/auth/findbyid-auth'
import { findByIDForServiceAuthRouter } from './routes/auth/findbyidforservice-auth'
import { updateUserRouter } from './routes/auth/updateuser'

//logging
import morganMiddleware from './services/morganMiddleware'
import Logger from './services/logger'

//security
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet'
import ExpressMongoSanitize from 'express-mongo-sanitize'

var rfs = require('rotating-file-stream') // version 2.x
var morgan = require('morgan')
var path = require('path')

const app = express()
app.set('trust proxy', true)

// Set security HTTP headers
//app.use(helmet())

// Limit requests from same API
const limiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
})
app.use('/api', limiter)

app.use(json())

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
})

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use(morganMiddleware)
app.get('/logger', (_, res) => {
  Logger.error('This is an error log')
  Logger.warn('This is a warn log')
  Logger.info('This is a info log')
  Logger.http('This is a http log')
  Logger.debug('This is a debug log')

  res.send('Hello world')
})

// Data sanitization against NoSQL query injection
app.use(ExpressMongoSanitize())

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV != 'test',
  })
)
app.use(currentUser)

//auth routes
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)
app.use(findByIDAuthRouter)
app.use(findByIDForServiceAuthRouter)
app.use(updateUserRouter)

//store routes
app.use(newStoreRouter)
app.use(indexStoreRouter)
app.use(findByIDStoreRouter)

//orders routes
app.use(newOrderRouter)
app.use(indexOrderRouter)
app.use(findByIDOrdersRouter)

app.all('*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
