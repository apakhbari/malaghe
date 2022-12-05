import mongoose from 'mongoose'
import { Password } from '../services/password'
import { updateIfCurrentPlugin } from 'mongoose-update-if-current'

// An interface that describes the properties that are required to create a new User
interface UserAttrs {
  fiName: string
  laName: string
  gender: string
  email?: string
  mobile: string
  phone?: string
  photo?: string
  address?: string
  postalCode?: string
  long?: String
  lat?: String
  role?: number
  password: string
  isActive?: Boolean
  createdAt?: Date
  passwordResetToken?: string
}

// An interface that describes the properties that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
}

// An interface that describes the properties that a User Document has
interface UserDoc extends mongoose.Document {
  fiName: string
  laName: string
  gender: string
  email?: string
  mobile: string
  phone?: string
  photo?: string
  address?: string
  postalCode?: string
  long?: String
  lat?: String
  role?: number
  password: string
  isActive?: Boolean
  createdAt?: Date
  passwordResetToken?: string
  version: number
}

const userSchema = new mongoose.Schema(
  {
    fiName: {
      type: String,
      required: true,
      trim: true,
    },
    laName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      default: 'تخصیص داده نشده',
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      default: 'تخصیص داده نشده',
    },
    photo: {
      type: String,
      default: 'تخصیص داده نشده',
    },
    address: {
      type: String,
      default: 'تخصیص داده نشده',
    },
    postalCode: {
      type: String,
      default: 'تخصیص داده نشده',
    },
    long: {
      type: String,
      default: 'تخصیص داده نشده',
    },
    lat: {
      type: String,
      default: 'تخصیص داده نشده',
    },
    role: {
      type: Number,
      required: true,
      default: 0,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20,
      trim: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    passwordResetToken: {
      type: String,
      default: 'تخصیص داده نشده',
    },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.role
        delete ret.__v
      },
    },
  }
)

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'))
    this.set('password', hashed)
  }
  done()
})

userSchema.set('versionKey', 'version')
userSchema.plugin(updateIfCurrentPlugin)

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { User }
