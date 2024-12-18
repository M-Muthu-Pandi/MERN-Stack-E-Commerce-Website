import express from "express";
import { Trending } from "../modals/productModel.js";

const router = express.Router();

// Get all trending products
router.get("/", async (req, res) => {
  try {
    const trending = await Trending.find({});
    res.send(trending);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new trending product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Trending({
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

// Delete a trending product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTrending = await Trending.findByIdAndDelete(id);

    if (!deletedTrending) {
      return res.status(404).json({ message: "Trending not found" });
    }

    res.status(200).json({ message: "Trending deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
