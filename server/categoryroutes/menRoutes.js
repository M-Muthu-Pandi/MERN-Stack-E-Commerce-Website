import express from "express";
import { Men } from "../modals/productModel.js";

const router = express.Router();

// Get all men's products
router.get("/", async (req, res) => {
  try {
    const men = await Men.find({});
    res.send(men);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men's product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Men({
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

// Delete a men's product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMen = await Men.findByIdAndDelete(id);

    if (!deletedMen) {
      return res.status(404).json({ message: "Men not found" });
    }

    res.status(200).json({ message: "Men deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
