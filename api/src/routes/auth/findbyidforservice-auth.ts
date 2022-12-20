import express, { Request, Response } from 'express'
import { BadRequestError } from '@apa_malaghe/utility'

import { User } from '../../models/user'

const ObjectId = require('mongodb').ObjectId

const router = express.Router()

router.get('/api/v1/users/service/:id', async (req: Request, res: Response) => {
  const existingUser = await User.findById(req.params.id).select(
    'fiName laName mobile locations gender'
  )

  if (!existingUser) {
    throw new BadRequestError('find user by id failed')
  }

  res.send(existingUser)
})

export { router as findByIDForServiceAuthRouter }
