import mongoose from 'mongoose';
import {Types} from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface magAttrs {
  title: string;
  description: string;
  summary: string;
  imageCover: string;
  photos?: string;
  videoLink?: string;
  createdAt?: Date;
  storeData?: storeAttrs;
}

interface storeAttrs {
  id: Types.ObjectId;
  title: string;
}

interface magDoc extends mongoose.Document {
  title: string;
  description: string;
  summary: string;
  imageCover: string;
  photos?: string;
  videoLink?: string;
  createdAt?: Date;
  storeData?: storeAttrs;
  version: number;
}

interface magModel extends mongoose.Model<magDoc> {
  build(attrs: magAttrs): magDoc;
}

const magSchema = new mongoose.Schema(
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
      required: true,
      trim: true,
      minlength: 4,
    },
    summary: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 200,
    },
    imageCover: {
      type: String,
      required: true,
    },
    photos: [{
      type: String,
      required: false,
    }],
    videoLink: {
      type: String,
      required: false,
      trim: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    storeData: [{
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

magSchema.set('versionKey', 'version');
magSchema.plugin(updateIfCurrentPlugin);

magSchema.statics.build = (attrs: magAttrs) => {
  return new Mag(attrs);
};

const Mag = mongoose.model<magDoc, magModel>('Mag', magSchema);

export { Mag };