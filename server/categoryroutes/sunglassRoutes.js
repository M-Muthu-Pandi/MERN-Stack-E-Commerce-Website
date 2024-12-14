import express from "express";
import { Sunglass } from "../modals/productModel.js";

const router = express.Router();

// Get all men products
router.get("/", async (req, res) => {
  try {
    const sunglass = await Sunglass.find({});
    res.send(sunglass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Sunglass({
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
