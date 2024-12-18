import { useCart } from "../common/Context/CartContext";

// Displays the total price and item count
const PriceDetails = () => {
  const { totalPrice, totalItems } = useCart();

  return (
    <div className="p-5 bg-white rounded-lg mt-5 md:mt-0">
      <h2 className="text-gray-500 font-medium mb-2 pb-2 border-b border-b-gray-300">
        PRICE DETAILS
      </h2>
      <div className="border-b border-b-gray-300 mb-2 pb-2 text-sm lg:text-base">
        <p className="flex justify-between mb-1">
          <span>Price ({totalItems} items)</span>
          <span>₹.{totalPrice.toLocaleString()}</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="text-green-500">Free</span>
        </p>
      </div>
      {/* Total amount */}
      <h2 className="flex justify-between md:text-lg lg:text-xl font-bold text-red-600">
        <span>Total Amount</span>
        <span>₹.{totalPrice.toLocaleString()}</span>
      </h2>
    </div>
  );
};

export default PriceDetails;
