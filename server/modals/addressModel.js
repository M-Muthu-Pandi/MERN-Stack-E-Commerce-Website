import { Schema, model } from "mongoose";

// Schema for storing delivery address details
const addressSchema = new Schema({
  name: String,
  number: Number,
  address: String,
  landmark: String,
  city: String,
  code: Number,
  state: String,
});

// Model for the Address collection
export const Address = model("Address", addressSchema, "deliveryaddress");
