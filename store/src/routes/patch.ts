import express, { Request, Response } from 'express';
import {NotFoundError} from '@apa_malaghe/utility';

import { Mag} from '../models/store';
import { MagUpdatedPublisher } from '../events/publishers/mag-updated-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.patch(
  '/api/v1/store/:storeId',
  async (req: Request, res: Response) => {
    const { magId } = req.params;

    const {title, description, summary, imageCover, photos, videoLink, storeData } = req.body;

    const mag = await Mag.findById(magId);

    if (!mag) {
      throw new NotFoundError();
    }

    //mag.title = "yo";
    await mag.save();

    if (!mag.storeData){
    // publishing an mag update event
    new MagUpdatedPublisher(natsWrapper.client).publish({
      id: mag.id,
      version: mag.version,
      title: mag.title,
      storeId: mag.storeData!.id
    });
      }

    res.send(mag);
  }
);

export { router as updateMagRouter };
