import express from "express";
import { Address } from "../modals/addressModel.js";

const router = express.Router();

// Get all men products
router.get("/", async (req, res) => {
  try {
    const address = await Address.find({});
    res.send(address);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new men product
router.post("/", async (req, res) => {
  try {
    const { name, number, address, landmark, city, code, state } = req.body;

    const newAddress = new Address({
      name,
      number,
      address,
      landmark,
      city,
      code,
      state,
    });

    await newAddress.save();
    res
      .status(201)
      .json({ message: "Address added successfully", details: newAddress });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an address by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("ID received in backend:", id);
    const deletedAddress = await Address.findByIdAndDelete(id);

    if (!deletedAddress) {
      return res.status(404).json({ message: "Address not found" });
    }

    res.status(200).json({ message: "Address deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
