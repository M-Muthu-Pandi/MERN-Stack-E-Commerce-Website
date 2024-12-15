import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  name: String,
  number: Number,
  address: String,
  landmark: String,
  city: String,
  code: Number,
  state: String,
});

// Delivery Details
export const Address = model("Address", addressSchema, "deliveryaddress");
