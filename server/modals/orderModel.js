import { Schema, model } from "mongoose";

// Schema for storing order details
const orderSchema = new Schema({
  image: String,
  title: String,
  price: Number,
  noOfItems: Number,
});

// Models for active and cancelled orders
export const Orders = model("Orders", orderSchema, "orders");
export const CancelledOrders = model(
  "CancelledOrders",
  orderSchema,
  "cancelledorders"
);
