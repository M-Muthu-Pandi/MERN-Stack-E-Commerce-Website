import express from "express";
import { Newarrival } from "../modals/productModel.js";

const router = express.Router();

// Get all new arrival products
router.get("/", async (req, res) => {
  try {
    const newarrival = await Newarrival.find({});
    res.send(newarrival);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new arrival product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Newarrival({
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

// Delete a new arrival product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNewarrival = await Newarrival.findByIdAndDelete(id);

    if (!deletedNewarrival) {
      return res.status(404).json({ message: "Newarrival not found" });
    }

    res.status(200).json({ message: "Newarrival deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
