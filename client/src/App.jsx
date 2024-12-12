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

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/product" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
