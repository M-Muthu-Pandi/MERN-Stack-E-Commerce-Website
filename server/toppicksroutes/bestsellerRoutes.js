import express from "express";
import { Bestseller } from "../modals/productModel.js";

const router = express.Router();

// Get all best-selling products
router.get("/", async (req, res) => {
  try {
    const bestseller = await Bestseller.find({});
    res.send(bestseller);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new best-selling product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Bestseller({
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

// Delete a best-selling product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBestseller = await Bestseller.findByIdAndDelete(id);

    if (!deletedBestseller) {
      return res.status(404).json({ message: "Bestseller not found" });
    }

    res.status(200).json({ message: "Bestseller deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
