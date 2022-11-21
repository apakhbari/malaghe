import express, { Request, Response } from 'express';
import {NotFoundError} from '@apa_malaghe/utility';
import { Mag } from '../models/mag';
import { natsWrapper } from '../nats-wrapper';
import { MagDeletedPublisher } from '../events/publishers/mag-deleted-publisher';

import {Types} from 'mongoose';


const router = express.Router();

router.delete(
  '/api/v1/mag/:magId',
  async (req: Request, res: Response) => {
    const mag = await Mag.findById(req.params.magId);

    if (!mag) {
      throw new NotFoundError();
    }

    mag.remove;

    res.status(204).json({
      status: 'success',
      data: null
    });


    if (!mag.storeData){
      // publishing an mag update event
      new MagDeletedPublisher(natsWrapper.client).publish({
        id: mag.id,
        version: mag.version,
        title: mag.title,
        storeId: (mag.storeData!.id!)
      });
        }
  }
);

export { router as deleteMagRouter };