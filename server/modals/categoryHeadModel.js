import { Schema, model } from "mongoose";

// Schema for storing category details
const categorySchema = new Schema({
  image: String,
  title: String,
  subtitle: String,
});

// Model for the Categories collection
export const Category = model("Category", categorySchema, "categories");
