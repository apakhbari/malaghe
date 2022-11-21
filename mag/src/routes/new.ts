import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import {
  BadRequestError,
  validateRequest,
} from '@apa_malaghe/utility';
import { body } from 'express-validator';

import { Mag } from '../models/mag';
import { MagAssignedPublisher} from '../events/publishers/mag-assigned-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/v1/mag',
  //requireAuth,
  [
      body('title')
      .isString()
      .trim()
      .notEmpty()
      .isLength({ min: 4, max: 40 })
      .withMessage('title must be valid'),

      body('description')
      .isString()
      .trim()
      .notEmpty()
      .isLength({ min: 4})
      .withMessage('description must be valid'),

      body('summary')
      .isString()
      .trim()
      .notEmpty()
      .isLength({ min: 4, max:200})
      .withMessage('summary must be valid'),

      body('imageCover')
      .isString()
      .trim()
      .notEmpty()
      .withMessage('imageCover must be valid'),

  ],
  validateRequest,
  async (req: Request, res: Response) => {

    const {title, description, summary, imageCover, photos, videoLink, storeData } = req.body;

    // Make sure the post is not already db
    const post = await Mag.findById(title);
    if (post) {
      throw new BadRequestError('Post Already in DB!');
    }

    // Build the mag and save it to the database
    const mag = Mag.build({
      title,
      description,
      summary,
      imageCover,
      photos,
      videoLink,
      storeData
    });
    await mag.save();

    if (!storeData){
    new MagAssignedPublisher(natsWrapper.client).publish({
      id: (mag.id).toString,
      version: mag.version,
      title: mag.title,
      storeId:mag.storeData!.id,
    });
    }

    res.status(201).send(mag);
  }
);

export { router as newMagRouter };
