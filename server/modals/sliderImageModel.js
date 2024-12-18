import { Schema, model } from "mongoose";

// Schema for storing slider image details
const sliderSchema = new Schema({
  image: String,
});

// Model for the Slider collection
export const Slider = model("Slider", sliderSchema, "slider");
