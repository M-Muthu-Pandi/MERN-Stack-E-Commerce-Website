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
import ProtectedRoute from "./components/Common/ProtectedRoute";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/placeorder"
            element={
              <ProtectedRoute>
                <PlaceOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <PlacedSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/delivered"
            element={
              <ProtectedRoute>
                <OrderDelivered />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/returned"
            element={
              <ProtectedRoute>
                <OrderReturned />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/cancelled"
            element={
              <ProtectedRoute>
                <OrderCancelled />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
