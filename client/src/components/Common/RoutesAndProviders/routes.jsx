import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Login from "../../UserAuthentication/Login";
import Signup from "../../UserAuthentication/Signup";
import ForgotPassword from "../../UserAuthentication/ForgotPassword";
import Home from "../../ECommerceFeatures/Home";
import Orders from "../../ECommerceFeatures/Orders";
import Cart from "../../ECommerceFeatures/AddToCart";
import PlaceOrder from "../../ECommerceFeatures/PlaceOrder";
import PlacedSuccess from "../../ECommerceFeatures/PlaceOrder/placedSuccess";
import OrderDelivered from "../../ECommerceFeatures/Orders/delivered";
import OrderReturned from "../../ECommerceFeatures/Orders/returned";
import OrderCancelled from "../../ECommerceFeatures/Orders/cancelled";
import SearchAndFilter from "../../ECommerceFeatures/SearchAndFilter";
import HelpAndSettings from "../../ECommerceFeatures/HelpAndSettings";
import ProductUpload from "../../AdminAccess/ProductUpload";
import OtherUpload from "../../AdminAccess/OtherUpload";
import MenFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/menFilter";
import WomenFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/womenFilter";
import KidsFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/kidsFilter";
import FootwearFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/footwearFilter";
import LuggageFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/luggageFilter";
import WatchFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/watchFilter";
import HandbagFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/handbag";
import SunglassFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/sunglass";
import TrendingFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/trending";
import BestsellerFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/bestsellerFilter";
import TodayDealFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/todaydealFilter";
import NewArrivalFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/newarrivalFilter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchAndFilter />} />
      <Route path="/filter/men" element={<MenFilter />} />
      <Route path="/filter/women" element={<WomenFilter />} />
      <Route path="/filter/kids" element={<KidsFilter />} />
      <Route path="/filter/footwear" element={<FootwearFilter />} />
      <Route path="/filter/luggage" element={<LuggageFilter />} />
      <Route path="/filter/watches" element={<WatchFilter />} />
      <Route path="/filter/handbag" element={<HandbagFilter />} />
      <Route path="/filter/sunglass" element={<SunglassFilter />} />
      <Route path="/filter/trending" element={<TrendingFilter />} />
      <Route path="/filter/bestseller" element={<BestsellerFilter />} />
      <Route path="/filter/todaydeal" element={<TodayDealFilter />} />
      <Route path="/filter/newarrival" element={<NewArrivalFilter />} />

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
      <Route
        path="/adminaccess/others"
        element={
          <ProtectedRoute>
            <OtherUpload />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
