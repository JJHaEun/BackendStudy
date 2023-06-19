import mongoose from "mongoose";

const UserSchema = {
  name: String,
  email: String,
  personal: String,
  prefer: String,
  pwd: String,
  phone: String,
};

export const User = mongoose.model("User", UserSchema);
