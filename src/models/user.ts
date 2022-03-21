import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", UserSchema);
