import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
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
  },
});

export default mongoose.model("user", UserSchema);
