import mongoose from 'mongoose';
import { Password } from '../services/password';
import { UsersRoles } from '@apa_malaghe/utility';

// An interface that describes the properties that are required to create a new User
interface UserAttrs {
  fiName: string;
  laName: string;
  email: string;
  mobile: number;
  photo?: string;
  locations?: locationsAttrs;
  role?: UsersRoles;
  password: string;
  isActive?: Boolean;
  createdAt?: Date;
  passwordResetToken?: string;
}

interface locationsAttrs {
  coordinates?: Array<coordinatesAttrs>
  address?: string;
  postalCode?: number;
}

interface coordinatesAttrs {
  long?: number;
  lat?: number;
}

// An interface that describes the properties that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties that a User Document has
interface UserDoc extends mongoose.Document {
  fiName: string;
  laName: string;
  email: string;
  mobile: number;
  photo?: string;
  locations?: locationsAttrs;
  role?: UsersRoles;
  password: string;
  isActive?: Boolean;
  createdAt?: Date;
  passwordResetToken?: string;
}

const userSchema = new mongoose.Schema(
  {
    fiName: {
      type: String,
      required: true,
      trim: true
    },
    laName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
      trim: true
    },
    photo: {
      type: String,
      required: false
    },
    locations: [
      {
        required: false,
        coordinates: [{
          type: Number,
          required: false
        }],
        address: {
          type: String,
          required: false
        },
        postalCode: {
          type: Number,
          required: false
        },
      }
    ],
    role: {
      type: UsersRoles,
      required: true,
      default: UsersRoles.User
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20,
      trim: true
    },
    isActive:  {
      type: Boolean,
      required: true,
      default: true
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    },
    passwordResetToken: {
      type: String,
      required: false
    },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.role;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
