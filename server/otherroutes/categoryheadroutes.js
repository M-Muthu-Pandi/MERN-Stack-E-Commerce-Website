import express from "express";
import { Category } from "../modals/categoryHeadModel.js";

const router = express.Router();

// Get all categories
router.get("/", async (req, res) => {
  try {
    const category = await Category.find({});
    res.send(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new category
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle } = req.body;

    const newCategory = new Category({
      image,
      title,
      subtitle,
    });

    await newCategory.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newCategory });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
