import { Schema, model } from "mongoose";

const sliderSchema = new Schema({
  image: String,
});

// Categories
export const Slider = model("Slider", sliderSchema, "slider");
