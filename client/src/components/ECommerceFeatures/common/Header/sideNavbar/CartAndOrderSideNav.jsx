import { Link, useNavigate } from "react-router-dom";
import cartLogo from "../../../../../assets/shopping-cart.png";

const CartAndOrdersSideNav = ({ handleClose, setIsSideNavVisible }) => {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
    window.location.reload();
    setIsSideNavVisible(false);
  };

  return (
    <>
      <Link className="sm:hidden text-white font-medium" to={"/orders"}>
        <p onClick={handleClose} className="mx-5 my-3 hover:underline">
          Returns & Orders
        </p>
      </Link>

      <div
        onClick={handleCart}
        className="mx-5 my-3 flex gap-2 sm:hidden items-center text-white font-medium hover:underline"
      >
        <img className="w-6" src={cartLogo} alt="Cart Logo" />
        <span>Cart</span>
      </div>
    </>
  );
};

export default CartAndOrdersSideNav;
