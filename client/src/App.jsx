import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/UserAuthentication/Login";
import Signup from "./components/UserAuthentication/Signup";
import ForgotPassword from "./components/UserAuthentication/ForgotPassword";
import Home from "./components/ECommerceFeatures/Home";
import Orders from "./components/ECommerceFeatures/Orders";
import Cart from "./components/ECommerceFeatures/AddToCart";
import PlaceOrder from "./components/ECommerceFeatures/PlaceOrder";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
