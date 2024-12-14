import express from "express";
import { Women } from "../modals/productModel.js";

const router = express.Router();

// Get all women products
router.get("/", async (req, res) => {
  try {
    const women = await Women.find({});
    res.send(women);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new women product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Women({
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
