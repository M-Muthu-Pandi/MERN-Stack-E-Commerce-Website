import { Link } from "react-router-dom";
import cartLogo from "../../../../../assets/shopping-cart.png";

const CartAndOrders = () => {
  return (
    <>
      <Link
        className="hidden sm:inline-block text-white text-sm font-medium"
        to={"/orders"}
      >
        <p className="border border-gray-900 p-1 hover:border-white flex flex-col">
          <span className="text-xs">Returns</span>
          <span className="font-bold">& Orders</span>
        </p>
      </Link>

      <Link
        className="hidden sm:flex border border-gray-900 p-1 hover:border-white items-end text-white text-sm font-medium"
        to={"/cart"}
      >
        <img className="w-8" src={cartLogo} alt="Cart Logo" />
        <span className="font-bold hidden md:inline-block">Cart</span>
      </Link>
    </>
  );
};

export default CartAndOrders;
