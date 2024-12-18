import { Schema, model } from "mongoose";

// Schema for storing cart item details
const cartSchema = new Schema({
  image: String,
  title: String,
  subtitle: String,
  price: Number,
  noOfItems: Number,
});

// Model for the Cart collection
export const Cart = model("Cart", cartSchema, "cart");
