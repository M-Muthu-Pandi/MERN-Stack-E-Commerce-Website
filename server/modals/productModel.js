import { Schema, model } from "mongoose";

const schema = new Schema({
  image: String,
  title: String,
  subtitle: String,
  rating: String,
  review: Number,
  price: Number,
});

// Categories
export const Men = model("Men", schema, "men");
export const Women = model("Women", schema, "women");
export const Kids = model("Kids", schema, "kids");
export const Footwear = model("Footwear", schema, "footwear");
export const Luggage = model("Luggage", schema, "luggage");
export const Watch = model("Watch", schema, "watch");
export const Handbag = model("Handbag", schema, "handbag");
export const Sunglass = model("Sunglass", schema, "sunglass");

// Top picks
export const Trending = model("Trending", schema, "trending");
export const Bestseller = model("Bestseller", schema, "bestseller");
export const Todaydeals = model("Todaydeals", schema, "todaydeals");
export const Newarrival = model("Newarrival", schema, "newarrival");
