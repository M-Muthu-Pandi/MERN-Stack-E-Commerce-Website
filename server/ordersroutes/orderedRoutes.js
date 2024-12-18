import express from "express";
import { Orders, CancelledOrders } from "../modals/orderModel.js";

const router = express.Router();

// Get all active orders
router.get("/", async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.send(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Cancel an order
router.post("/cancel/:id", async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Orders.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Create a new document in the CancelledOrders collection with order details
    const cancelledOrder = new CancelledOrders({
      image: order.image,
      title: order.title,
      price: order.price,
      noOfItems: order.noOfItems,
    });
    await cancelledOrder.save();

    // Remove the order from the Orders collection
    await Orders.findByIdAndDelete(orderId);

    res.status(200).json({ message: "Order cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
