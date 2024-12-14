import express from "express";
import { Todaydeals } from "../modals/productModel.js";

const router = express.Router();

// Get all men products
router.get("/", async (req, res) => {
  try {
    const todaydeals = await Todaydeals.find({});
    res.send(todaydeals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Todaydeals({
      image,
      title,
      subtitle,
      rating,
      review,
      price,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
