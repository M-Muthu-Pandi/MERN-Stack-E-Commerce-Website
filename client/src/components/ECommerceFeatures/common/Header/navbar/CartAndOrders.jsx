import { Link, useNavigate } from "react-router-dom";
import cartLogo from "../../../../../assets/shopping-cart.png";

const CartAndOrders = () => {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
    window.location.reload();
  };
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

      <div
        className="cursor-pointer hidden sm:flex border border-gray-900 p-1 hover:border-white items-end text-white text-sm font-medium"
        onClick={handleCart}
      >
        <img className="w-8" src={cartLogo} alt="Cart Logo" />
        <span className="font-bold hidden md:inline-block">Cart</span>
      </div>
    </>
  );
};

export default CartAndOrders;
