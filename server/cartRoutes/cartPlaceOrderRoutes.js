import express from "express";
import { Cart } from "../modals/cartModel.js";
import { Orders } from "../modals/orderModel.js";

const router = express.Router();

// Get all cart items
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

// Place order and move from cart to orders
router.post("/place-order", async (req, res) => {
  try {
    // Fetch all items from the cart collection
    const cartItems = await Cart.find({});

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "No items in the cart" });
    }

    // Insert cart items into the orders collection
    await Orders.insertMany(cartItems);

    // Clear the cart collection
    await Cart.deleteMany({});

    res.status(200).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to place order", error: err.message });
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
