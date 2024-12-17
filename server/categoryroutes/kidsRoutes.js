import express from "express";
import { Kids } from "../modals/productModel.js";

const router = express.Router();

// Get all men products
router.get("/", async (req, res) => {
  try {
    const kids = await Kids.find({});
    res.send(kids);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Kids({
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

// Delete an Product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedKids = await Kids.findByIdAndDelete(id);

    if (!deletedKids) {
      return res.status(404).json({ message: "Kids not found" });
    }

    res.status(200).json({ message: "Kids deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
