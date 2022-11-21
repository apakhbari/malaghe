import express, { Request, Response } from 'express';
import { requireAuth } from '@apa_malaghe/utility';
import { Mag } from '../models/mag';

const router = express.Router();

router.get('/api/v1/mag', async (req: Request, res: Response) => {
  const mags = await Mag.find({}, 'title-id-summary-imageCover-createdAt').sort('-createdAt').limit(10);

  res.send(mags);
});

export { router as indexMagRouter };