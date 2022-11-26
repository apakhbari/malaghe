import mongoose from 'mongoose';
import {Types} from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface storeAttrs {
  title: string;
  description?: string;
  summary?: [string];
  volumes?: [string];
  imageCover: string;
  photos?: string;
  availableQuantity: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  price: number;
  hasDiscount?: boolean;
  discountKind?: discountKind;
  discountedPrice?: number;
  createdAt?: Date;
  magData?: magAttrs;
}

interface magAttrs {
  id: Types.ObjectId;
  title: string;
}

enum discountKind {
  percentage = 'percentage' ,
  exactPrice = 'exactPrice',
  }

interface storeDoc extends mongoose.Document {
  title: string;
  description?: string;
  summary?: [string];
  volumes?: [string];
  imageCover: string;
  photos?: string;
  availableQuantity: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  price: number;
  hasDiscount?: boolean;
  discountKind?: discountKind;
  discountedPrice?: number;
  createdAt?: Date;
  magData?: magAttrs;
  version: number;
}

interface storeModel extends mongoose.Model<storeDoc> {
  build(attrs: storeAttrs): storeDoc;
}

const storeSchema = new mongoose.Schema(
  {

    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 4,
      maxlength: 40,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    summary: [{
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 200,
    }],
    volumes: [{
      type: String,
      required: false,
      trim: true,
    }],
    imageCover: {
      type: String,
      required: true,
    },
    photos: [{
      type: String,
      required: false,
    }],
    availableQuantity: {
      type: Number,
      required: true,
    },
    ratingsAverage: {
      type: Number,
      required: true,
      default: 5,
    },
    ratingsQuantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    hasDiscount: {
      type: Boolean,
      required: true,
      default: false,
    },
    discountKind: {
      type: discountKind,
      required: false,
    },
    discountPrice: {
      type: Number,
      required: false,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    magData: [{
      required: false,
      id:{
        type: Types.ObjectId,
        required: true,
      },
      title:{
        type: String,
        required: true,
        trim: true,
      },
    }],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

storeSchema.set('versionKey', 'version');
storeSchema.plugin(updateIfCurrentPlugin);

storeSchema.statics.build = (attrs: storeAttrs) => {
  return new Store(attrs);
};

const Store = mongoose.model<storeDoc, storeModel>('Store', storeSchema);

export { Store };