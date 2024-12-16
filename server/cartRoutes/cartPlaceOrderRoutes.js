import express from "express";
import { Cart } from "../modals/cartModel.js";

const router = express.Router();

// Get all men products
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find({});
    res.send(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, price, noOfItems } = req.body;

    const newCart = new Cart({
      image,
      title,
      subtitle,
      price,
      noOfItems,
    });

    await newCart.save();
    res
      .status(201)
      .json({ message: "Card added successfully", details: newCart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update noOfItems for a specific cart item
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { noOfItems } = req.body;

  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      id,
      { noOfItems },
      { new: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json({ message: "Cart item updated successfully", updatedCart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
