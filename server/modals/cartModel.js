import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  image: String,
  title: String,
  subtitle: String,
  price: Number,
  noOfItems: Number,
});

// Delivery Details
export const Cart = model("Cart", cartSchema, "cart");
