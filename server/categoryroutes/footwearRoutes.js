import express from "express";
import { Footwear } from "../modals/productModel.js";

const router = express.Router();

// Get all men products
router.get("/", async (req, res) => {
  try {
    const footwear = await Footwear.find({});
    res.send(footwear);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Footwear({
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
    const deletedFootwear = await Footwear.findByIdAndDelete(id);

    if (!deletedFootwear) {
      return res.status(404).json({ message: "Footwear not found" });
    }

    res.status(200).json({ message: "Footwear deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
