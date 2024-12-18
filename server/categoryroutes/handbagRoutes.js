import express from "express";
import { Handbag } from "../modals/productModel.js";

const router = express.Router();

// Get all handbags
router.get("/", async (req, res) => {
  try {
    const handbag = await Handbag.find({});
    res.send(handbag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new handbag
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Handbag({
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

// Delete a handbag by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHandbag = await Handbag.findByIdAndDelete(id);

    if (!deletedHandbag) {
      return res.status(404).json({ message: "Handbag not found" });
    }

    res.status(200).json({ message: "Handbag deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
