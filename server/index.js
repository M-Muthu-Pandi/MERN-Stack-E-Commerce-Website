import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";

// Import Routes
import categoryheadroutes from "./otherroutes/categoryheadroutes.js";
import sliderRoutes from "./otherroutes/sliderRoutes.js";
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
import cartPlaceOrderRoutes from "./cartRoutes/cartPlaceOrderRoutes.js";
import orderedRoutes from "./ordersroutes/orderedRoutes.js";
import cancelledRoutes from "./ordersroutes/cancelledRoutes.js";

const app = express();
app.use(cors());

// Middleware
app.use(json());

// MongoDB Connection
connect(
  "mongodb+srv://muthupandim:ra9KhU6RSubTRuvz@ecommerce-project.cojx3.mongodb.net/mu2infinty?retryWrites=true&w=majority&appName=ecommerce-project"
)
  .then(() => console.log("DB Success"))
  .catch(() => console.log("DB failed"));

// Use the routes
// Category Routes (grouped by category)
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

// Delivery Details Route
app.use("/api/deliverydetails", deliveryAddressRoutes);

// Cart and Place Order Route
app.use("/api/cartandplaceorder", cartPlaceOrderRoutes);

// Orders Route
app.use("/api/ordered", orderedRoutes);
app.use("/api/cancelled", cancelledRoutes);

// Other Routes
app.use("/api/categorylist", categoryheadroutes);
app.use("/api/slider", sliderRoutes);

// Start server
const port = 4000;
app.listen(port, () => {
  console.log(`Server started at port ${port}...`);
});
