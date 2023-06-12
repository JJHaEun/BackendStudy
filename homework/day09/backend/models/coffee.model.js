import mongoose from "mongoose";

const CoffeeSchema = new mongoose.Schema({
  name: String,
  kcal: Number,
  price: Number,
});

export const Coffee = mongoose.model("Coffee", CoffeeSchema);
