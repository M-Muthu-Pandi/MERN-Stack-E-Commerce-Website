import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import menRoutes from "./categoryroutes/menRoutes.js";
import womenRoutes from "./categoryroutes/womenRoutes.js";
import kidsRoutes from "./categoryroutes/kidsRoutes.js";
import footwearRoutes from "./categoryroutes/footwearRoutes.js";
import luggageRoutes from "./categoryroutes/luggageRoutes.js";
import watchRoutes from "./categoryroutes/watchRoutes.js";
import handbagRoutes from "./categoryroutes/handbagRoutes.js";
import sunglassRoutes from "./categoryroutes/sunglassRoutes.js";
import trendingRoutes from "./toppicksroutes/trendingRoutes.js";
import bestsellerRoutes from "./toppicksroutes/bestsellerRoutes.js";
import todaydealRoutes from "./toppicksroutes/todaydealRoutes.js";
import newarrivalRoutes from "./toppicksroutes/newarrivalRoutes.js";
import deliveryAddressRoutes from "./addressroutes/deliveryAddressRoutes.js";

const app = express();
app.use(cors());
app.use(json());

// MongoDB Connection
connect(
  "mongodb+srv://muthupandim:ra9KhU6RSubTRuvz@ecommerce-project.cojx3.mongodb.net/mu2infinty?retryWrites=true&w=majority&appName=ecommerce-project"
)
  .then(() => console.log("DB Success"))
  .catch(() => console.log("DB failed"));

// Use the routes
// Category Routes
app.use("/api/men", menRoutes);
app.use("/api/women", womenRoutes);
app.use("/api/kids", kidsRoutes);
app.use("/api/footwear", footwearRoutes);
app.use("/api/luggages", luggageRoutes);
app.use("/api/watches", watchRoutes);
app.use("/api/handbags", handbagRoutes);
app.use("/api/sunglass", sunglassRoutes);

// Top Picks Routes
app.use("/api/trending", trendingRoutes);
app.use("/api/bestseller", bestsellerRoutes);
app.use("/api/todaydeals", todaydealRoutes);
app.use("/api/newarrival", newarrivalRoutes);

// Delivery Details
app.use("/api/deliverydetails", deliveryAddressRoutes);

const port = 4000;
app.listen(port, () => {
  console.log(`Server started at port ${port}...`);
});
