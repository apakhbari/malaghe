import express, { Request, Response } from 'express';
import {NotFoundError} from '@apa_malaghe/utility';
import { Mag } from '../models/store';

const router = express.Router();

router.get(
  '/api/v1/store/:storeId',
  async (req: Request, res: Response) => {
    const mag = await Mag.findById(req.params.magId);

    if (!mag) {
      throw new NotFoundError();
    }

    res.send(mag);
  }
);

export { router as showMagRouter };
