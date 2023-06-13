import mongoose from "mongoose";

const TokenInfoSchema = {
  token: String,
  phone: String,
  isAuth: Boolean,
};

export const TokenInfo = mongoose.model("TokenInfo", TokenInfoSchema);
