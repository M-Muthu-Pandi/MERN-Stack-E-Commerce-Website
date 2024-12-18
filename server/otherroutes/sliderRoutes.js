import express from "express";
import { Slider } from "../modals/sliderImageModel.js";

const router = express.Router();

// Get all slider images
router.get("/", async (req, res) => {
  try {
    const slider = await Slider.find({});
    res.send(slider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new slider image
router.post("/", async (req, res) => {
  try {
    const { image } = req.body;

    const newSlider = new Slider({
      image,
    });

    await newSlider.save();
    res
      .status(201)
      .json({ message: "Slider added successfully", details: newSlider });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
