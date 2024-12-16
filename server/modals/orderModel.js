import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  image: String,
  title: String,
  price: Number,
  noOfItems: Number,
});

// Delivery Details
export const Orders = model("Orders", orderSchema, "orders");
export const CancelledOrders = model(
  "CancelledOrders",
  orderSchema,
  "cancelledorders"
);
