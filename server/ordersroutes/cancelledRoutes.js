import express from "express";
import { CancelledOrders } from "../modals/orderModel.js";

const router = express.Router();

// Get all cancelled orders
router.get("/", async (req, res) => {
  try {
    const cancelledOrders = await CancelledOrders.find({});
    res.send(cancelledOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a specific cancelled order
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await CancelledOrders.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
