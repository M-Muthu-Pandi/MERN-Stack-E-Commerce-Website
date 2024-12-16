import express from "express";
import { CancelledOrders } from "../modals/orderModel.js";

const router = express.Router();

// Get all men products
router.get("/", async (req, res) => {
  try {
    const cancelledOrders = await CancelledOrders.find({});
    res.send(cancelledOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men product
router.post("/", async (req, res) => {
  try {
    const { image, title, price, noOfItems } = req.body;

    const newCancelledOrders = new CancelledOrders({
      image,
      title,
      price,
      noOfItems,
    });

    await newCancelledOrders.save();
    res
      .status(201)
      .json({
        message: "Address added successfully",
        details: newCancelledOrders,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
