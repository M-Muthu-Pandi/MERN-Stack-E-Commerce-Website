import { useNavigate } from "react-router-dom";
import axios from "axios";

const PlaceYourOrder = ({ isOrderPlaceable }) => {
  const navigate = useNavigate();

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/cartandplaceorder/place-order"
      );

      if (response.status === 200) {
        alert("Order placed successfully!");
        navigate("/success");
      }
    } catch (err) {
      console.error("Error placing order", err);
      alert("Failed to place your order. Please try again.");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={placeOrder}
          className={`rounded-3xl p-2 text-sm w-3/4 mt-5 mb-2 ${
            isOrderPlaceable
              ? "bg-yellow-400 hover:bg-yellow-500"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isOrderPlaceable}
        >
          Place Your Order
        </button>
      </div>
    </>
  );
};

export default PlaceYourOrder;
