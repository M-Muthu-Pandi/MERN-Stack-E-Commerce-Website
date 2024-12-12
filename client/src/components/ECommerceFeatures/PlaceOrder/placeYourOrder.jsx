import { useNavigate } from "react-router-dom";

const PlaceYourOrder = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <button
        onClick={() => navigate("/orders")}
        className="bg-yellow-400 rounded-3xl p-2 text-sm hover:bg-yellow-500 w-3/4 mt-5"
      >
        Place Your Order
      </button>
    </div>
  );
};

export default PlaceYourOrder;
