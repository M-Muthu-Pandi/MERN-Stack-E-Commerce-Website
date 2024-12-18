import { useNavigate } from "react-router-dom";

// Success page shown after an order is successfully placed
const PlacedSuccess = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen flex justify-center items-center bg-gray-300 p-2">
      <section className="flex flex-col items-center gap-5 bg-white rounded-lg px-2 py-5 sm:p-10">
        <h3 className="text-green-600 text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Your order has been placed successfully !
        </h3>
        <button
          onClick={() => navigate("/orders")}
          className="bg-orange-400 hover:bg-orange-500 rounded-3xl px-3 py-1 sm:px-10 sm:py-2"
        >
          Go to Orders
        </button>
      </section>
    </main>
  );
};

export default PlacedSuccess;
