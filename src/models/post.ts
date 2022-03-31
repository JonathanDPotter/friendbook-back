import mongoose from "mongoose";
import { UserSchema } from "./user";

const PostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },

  date: {
    type: Number,
    required: true,
  },

  body: {
    type: String,
  },

  image: {
    type: String,
  },
  comments: [
    {
      author: String,
      date: Number,
      body: String,
      image: String,
      reactions: {
        angry: [String],
        care: [String],
        love: [String],
        haha: [String],
        wow: [String],
        sad: [String],
        like: [String],
      },
    },
  ],
  reactions: {
    angry: [String],
    care: [String],
    love: [String],
    haha: [String],
    wow: [String],
    sad: [String],
    like: [String],
  },
});

export default mongoose.model("post", PostSchema);
