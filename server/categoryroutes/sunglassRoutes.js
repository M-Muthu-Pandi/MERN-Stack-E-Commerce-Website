import express from "express";
import { Sunglass } from "../modals/productModel.js";

const router = express.Router();

// Get all sunglasses
router.get("/", async (req, res) => {
  try {
    const sunglass = await Sunglass.find({});
    res.send(sunglass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new sunglass
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

// Delete a sunglass by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSunglass = await Sunglass.findByIdAndDelete(id);

    if (!deletedSunglass) {
      return res.status(404).json({ message: "Sunglass not found" });
    }

    res.status(200).json({ message: "Sunglass deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
