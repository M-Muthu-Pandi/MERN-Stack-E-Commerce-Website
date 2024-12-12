import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/ECommerceFeatures/common/Context/CartContext";
import Login from "./components/UserAuthentication/Login";
import Signup from "./components/UserAuthentication/Signup";
import ForgotPassword from "./components/UserAuthentication/ForgotPassword";
import Home from "./components/ECommerceFeatures/Home";
import Orders from "./components/ECommerceFeatures/Orders";
import Cart from "./components/ECommerceFeatures/AddToCart";
import PlaceOrder from "./components/ECommerceFeatures/PlaceOrder";
import SingleProduct from "./components/ECommerceFeatures/SingleProduct";
import PlacedSuccess from "./components/ECommerceFeatures/PlaceOrder/placedSuccess";
import OrderDelivered from "./components/ECommerceFeatures/Orders/delivered";
import OrderReturned from "./components/ECommerceFeatures/Orders/returned";
import OrderCancelled from "./components/ECommerceFeatures/Orders/cancelled";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/success" element={<PlacedSuccess />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/delivered" element={<OrderDelivered />} />
          <Route path="/orders/returned" element={<OrderReturned />} />
          <Route path="/orders/cancelled" element={<OrderCancelled />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
