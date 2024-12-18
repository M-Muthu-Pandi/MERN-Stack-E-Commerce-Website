import { useCart } from "../common/Context/CartContext";
import { useNavigate } from "react-router-dom";

const ProceedBuy = () => {
  const { totalPrice, totalItems } = useCart(); // Accessing total price and items in the cart
  const navigate = useNavigate();

  return (
    <section className="hidden md:flex p-3 bg-white rounded-lg flex-grow basis-1/4 flex-col items-center">
      {/* Display subtotal with number of items and total price */}
      <h2 className="text-xl lg:text-2xl font-medium mb-5">
        Subtotal ({totalItems} items): ₹.
        {totalPrice.toLocaleString()}
      </h2>
      <button
        onClick={() => navigate("/placeorder")} // Navigate to the place order page
        className="bg-yellow-400 rounded-3xl p-2 text-sm hover:bg-yellow-500 w-3/4"
      >
        Proceed to buy
      </button>
    </section>
  );
};

export default ProceedBuy;
