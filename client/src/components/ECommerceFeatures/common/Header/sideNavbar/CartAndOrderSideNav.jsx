import { Link } from "react-router-dom";
import cartLogo from "../../../../../assets/shopping-cart.png";

const CartAndOrdersSideNav = () => {
  return (
    <>
      <Link className="sm:hidden text-white font-medium" to={"/orders"}>
        <p className="mx-5 my-3 hover:underline">Returns & Orders</p>
      </Link>

      <Link
        className="mx-5 my-3 flex gap-2 sm:hidden items-center text-white font-medium hover:underline"
        to={"/cart"}
      >
        <img className="w-6" src={cartLogo} alt="Cart Logo" />
        <span>Cart</span>
      </Link>
    </>
  );
};

export default CartAndOrdersSideNav;
