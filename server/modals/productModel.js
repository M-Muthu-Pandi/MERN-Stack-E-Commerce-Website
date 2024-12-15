import { Schema, model } from "mongoose";

const productSchema = new Schema({
  image: String,
  title: String,
  subtitle: String,
  rating: String,
  review: Number,
  price: Number,
});

// Categories
export const Men = model("Men", productSchema, "men");
export const Women = model("Women", productSchema, "women");
export const Kids = model("Kids", productSchema, "kids");
export const Footwear = model("Footwear", productSchema, "footwear");
export const Luggage = model("Luggage", productSchema, "luggage");
export const Watch = model("Watch", productSchema, "watch");
export const Handbag = model("Handbag", productSchema, "handbag");
export const Sunglass = model("Sunglass", productSchema, "sunglass");

// Top picks
export const Trending = model("Trending", productSchema, "trending");
export const Bestseller = model("Bestseller", productSchema, "bestseller");
export const Todaydeals = model("Todaydeals", productSchema, "todaydeals");
export const Newarrival = model("Newarrival", productSchema, "newarrival");