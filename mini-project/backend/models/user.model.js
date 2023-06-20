import mongoose from "mongoose";

const UserSchema = {
  name: String,
  email: String,
  personal: String,
  prefer: String,
  pwd: String,
  phone: String,
  og: Object,
};

export const User = mongoose.model("User", UserSchema);
