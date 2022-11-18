import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@apa_malaghe/utility';

import { User } from '../models/user';

const router = express.Router();

router.post(
  '/api/v1/users/signup',
  [
    body('fiName')
      .isString()
      .trim()
      .notEmpty()
      .isLength({ min: 2, max: 20 })
      .withMessage('first Name must be valid'),

    body('laName')
      .isString()
      .trim()
      .notEmpty()
      .isLength({ min: 2, max: 20 })
      .withMessage('last Name must be valid'),
    
    body('email')
      .trim()
      .notEmpty()
      .isEmail()
      .withMessage('Email must be valid'),

    body('mobile')
      .trim()
      .notEmpty()
      .isNumeric()
      .isLength({ min:11, max:11 })
      .withMessage('mobile must be valid'),

    body('password')
      .trim()
      .notEmpty()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { fiName, laName, email, mobile, password} = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = User.build({ fiName, laName, email, mobile, password });
    await user.save();

    // Generate JWT
    const userJWT = jwt.sign(
      {
        id: user.id,
        email: user.email,
        mobile: user.mobile,
        fiName: user.fiName,
        laName: user.laName,
        role: user.role
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJWT,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
