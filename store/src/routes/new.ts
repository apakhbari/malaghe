import mongoose from 'mongoose'
import express, { Request, Response } from 'express'
import {
  BadRequestError,
  validateRequest,
  currentUser,
  requireAccess,
} from '@apa_malaghe/utility'
import { body } from 'express-validator'

import { Store } from '../models/store'

const router = express.Router()

router.post(
  '/api/v1/store',
  //currentUser,
  //requireAccess,
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      title,
      slug,
      description,
      summary,
      volumes,
      imageCover,
      photos,
      availableQuantity,
      price,
      hasDiscount,
      discountKind,
      discountedPrice,
      madeIn,
      goodKind,
      hasMag,
    } = req.body

    console.log(req.body)

    // Make sure the post is not already db
    const post = await Store.findOne({ title })
    if (post) {
      throw new BadRequestError('Post Already in DB!')
    }

    // Build the store and save it to the database
    const store = Store.build({
      title,
      slug,
      description,
      summary,
      volumes,
      imageCover,
      photos,
      availableQuantity,
      price,
      hasDiscount,
      discountKind,
      discountedPrice,
      madeIn,
      goodKind,
      hasMag,
    })
    await store.save()

    res.status(201).send(store)
  }
)

export { router as newStoreRouter }
