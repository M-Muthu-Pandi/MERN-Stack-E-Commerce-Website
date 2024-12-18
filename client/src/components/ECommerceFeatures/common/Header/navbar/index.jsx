import CartAndOrders from "./CartAndOrders";
import LogoAndSearch from "./LogoAndSearch";
import Sidenavbar from "../sideNavbar";
import UserBtn from "./User";
import sideNavbar from "../../../../../assets/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  // Toggle the sidebar
  const handleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  // Close the sidebar
  const handleClose = () => {
    setIsSideNavVisible(false);
  };

  return (
    <>
      <nav className="flex justify-between sm:justify-around items-center bg-gray-900 px-2 sm:px-3 py-2 sticky top-0 z-50">
        <LogoAndSearch /> {/* Logo and Search bar */}
        <UserBtn /> {/* User button for login/logout */}
        <CartAndOrders /> {/* Cart and Orders section */}
        {/* Side Navbar Button */}
        <img
          onClick={handleSideNav}
          className="w-6 sm:hidden cursor-pointer"
          src={sideNavbar}
          alt="Navbar"
        />
        {/* Sidebar navigation */}
        {isSideNavVisible && (
          <Sidenavbar
            setIsSideNavVisible={setIsSideNavVisible}
            handleClose={handleClose}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
