import express from "express";
import { Orders } from "../modals/orderModel.js";

const router = express.Router();

// Get all men products
router.get("/", async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.send(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, price, noOfItems } = req.body;

    const newOrders = new Orders({
      image,
      title,
      subtitle,
      price,
      noOfItems,
    });

    await newOrders.save();
    res
      .status(201)
      .json({ message: "Address added successfully", details: newOrders });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
