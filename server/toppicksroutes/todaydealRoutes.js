import express from "express";
import { Todaydeals } from "../modals/productModel.js";

const router = express.Router();

// Get all today's deals products
router.get("/", async (req, res) => {
  try {
    const todaydeals = await Todaydeals.find({});
    res.send(todaydeals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new today's deal product
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

// Delete a today's deal product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodaydeals = await Todaydeals.findByIdAndDelete(id);

    if (!deletedTodaydeals) {
      return res.status(404).json({ message: "Todaydeals not found" });
    }

    res.status(200).json({ message: "Todaydeals deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
