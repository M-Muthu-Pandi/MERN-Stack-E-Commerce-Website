import CartAndOrders from "./CartAndOrders";
import LogoAndSearch from "./LogoAndSearch";
import Sidenavbar from "../sideNavbar";
import UserBtn from "./User";
import sideNavbar from "../../../../../assets/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  const handleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <>
      <nav className="flex justify-between sm:justify-around items-center bg-gray-900 px-2 sm:px-3 py-2 sticky top-0 z-50">
        <LogoAndSearch />

        <UserBtn />

        <CartAndOrders />

        <img
          onClick={handleSideNav}
          className="w-6 sm:hidden cursor-pointer"
          src={sideNavbar}
          alt="Navbar"
        />

        {isSideNavVisible && (
          <Sidenavbar handleClose={() => setIsSideNavVisible(false)} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
