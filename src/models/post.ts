import mongoose from "mongoose";
import { UserSchema } from "./user";

const PostSchema = new mongoose.Schema({
  author: {
    type: UserSchema,
    required: true,
  },

  date: {
    type: Number,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
  comments: [
    {
      author: UserSchema,
      date: Number,
      body: String,
      image: String,
      reaction: String,
    },
  ],
});

export default mongoose.model("post", PostSchema);
