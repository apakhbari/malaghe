import mongoose from 'mongoose'
import express, { Request, Response } from 'express'
import { BadRequestError, validateRequest } from '@apa_malaghe/utility'
import { body } from 'express-validator'

import { Store } from '../models/store'

const router = express.Router()

router.post(
  '/api/v1/store',
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
      .withMessage('description must be valid'),

    body('summary').trim().notEmpty().withMessage('summary must be valid'),

    body('volumes').isString().trim().withMessage('summary must be valid'),

    body('imageCover')
      .isString()
      .trim()
      .notEmpty()
      .withMessage('image Cover must be valid'),

    body('availableQuantity')
      .isNumeric()
      .trim()
      .notEmpty()
      .withMessage('available Quantity must be valid'),

    body('price').isNumeric().notEmpty().withMessage('price must be valid'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      title,
      description,
      summary,
      volumes,
      imageCover,
      photos,
      availableQuantity,
      price,
    } = req.body

    // Make sure the post is not already db
    const post = await Store.findById(title)
    if (post) {
      throw new BadRequestError('Post Already in DB!')
    }

    // Build the mag and save it to the database
    const store = Store.build({
      title,
      description,
      summary,
      volumes,
      imageCover,
      photos,
      availableQuantity,
      price,
    })
    await store.save()

    res.status(201).send(store)
  }
)

export { router as newStoreRouter }
