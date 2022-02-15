import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
    required: true,
  },

  image: {
    type: String,
  },
  comments: [
    {
      body: { type: String, required: true },
      image: { type: String },
    },
  ],
});

export default mongoose.model("user", UserSchema);
