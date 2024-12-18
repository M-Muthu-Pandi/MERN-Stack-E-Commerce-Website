import express from "express";
import { Watch } from "../modals/productModel.js";

const router = express.Router();

// Get all watches
router.get("/", async (req, res) => {
  try {
    const watch = await Watch.find({});
    res.send(watch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new watch
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Watch({
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

// Delete a watch by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWatch = await Watch.findByIdAndDelete(id);

    if (!deletedWatch) {
      return res.status(404).json({ message: "Watch not found" });
    }

    res.status(200).json({ message: "Watch deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
