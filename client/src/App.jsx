import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./components/ECommerceFeatures/common/Context/ProductsContext";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import Login from "./components/UserAuthentication/Login";
import Signup from "./components/UserAuthentication/Signup";
import ForgotPassword from "./components/UserAuthentication/ForgotPassword";
import Home from "./components/ECommerceFeatures/Home";
import Orders from "./components/ECommerceFeatures/Orders";
import Cart from "./components/ECommerceFeatures/AddToCart";
import PlaceOrder from "./components/ECommerceFeatures/PlaceOrder";
import PlacedSuccess from "./components/ECommerceFeatures/PlaceOrder/placedSuccess";
import OrderDelivered from "./components/ECommerceFeatures/Orders/delivered";
import OrderReturned from "./components/ECommerceFeatures/Orders/returned";
import OrderCancelled from "./components/ECommerceFeatures/Orders/cancelled";
import SearchAndFilter from "./components/ECommerceFeatures/SearchAndFilter";
import HelpAndSettings from "./components/ECommerceFeatures/HelpAndSettings";
import ProductUpload from "./components/AdminAccess/ProductUpload";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchAndFilter />} />
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
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <HelpAndSettings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminaccess"
            element={
              <ProtectedRoute>
                <ProductUpload />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
