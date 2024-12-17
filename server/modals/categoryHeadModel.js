import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  image: String,
  title: String,
  subtitle: String,
});

// Categories
export const Category = model("Category", categorySchema, "categories");
