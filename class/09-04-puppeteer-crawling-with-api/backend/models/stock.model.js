import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
  name: String,
  date: Date,
  price: Number,
  timePrice: Number,
  hightPrice: Number,
  lowPrice: Number,
  amount: Number,
});

export const Stock = mongoose.model("Stock", StockSchema);
