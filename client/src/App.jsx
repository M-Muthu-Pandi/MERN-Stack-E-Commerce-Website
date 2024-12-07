import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/ECommerceFeatures/Home";
import Login from "./components/UserAuthentication/Login";
import Signup from "./components/UserAuthentication/Signup";
import ForgotPassword from "./components/UserAuthentication/ForgotPassword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
