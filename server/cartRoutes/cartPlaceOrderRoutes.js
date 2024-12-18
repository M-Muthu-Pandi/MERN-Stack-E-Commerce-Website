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

// Add a new cart item
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, price, noOfItems } = req.body;

    // Check if the product already exists in the cart
    const existingCartItem = await Cart.findOne({ title, subtitle });

    if (existingCartItem) {
      return res
        .status(400)
        .json({ message: "Product is already in the cart" });
    }

    const newCart = new Cart({
      image,
      title,
      subtitle,
      price,
      noOfItems,
    });

    // Saving the new cart item to the database
    await newCart.save();
    res
      .status(201)
      .json({ message: "Card added successfully", details: newCart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a cart item by its ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCart = await Cart.findByIdAndDelete(id);

    if (!deletedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Place order and clear the cart
router.post("/place-order", async (req, res) => {
  try {
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

// Update the quantity of items in a cart item
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
