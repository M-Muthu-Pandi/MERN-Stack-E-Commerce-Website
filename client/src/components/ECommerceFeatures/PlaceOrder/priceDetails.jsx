import { useCart } from "../common/Context/ProductsContext";

const PriceDetails = () => {
  const { totalItems, subtotalPrice } = useCart();

  return (
    <div className="p-5 bg-white rounded-lg mt-5 md:mt-0">
      <h2 className="text-gray-500 font-medium mb-2 pb-2 border-b border-b-gray-300">
        PRICE DETAILS
      </h2>
      <div className="border-b border-b-gray-300 mb-2 pb-2 text-sm lg:text-base">
        <p className="flex justify-between mb-1">
          <span>Price ({totalItems} items)</span>
          <span>₹.{subtotalPrice.toLocaleString()}</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="text-green-500">Free</span>
        </p>
      </div>
      <h2 className="flex justify-between md:text-lg lg:text-xl font-bold text-red-600">
        <span>Total Amount</span>
        <span>₹.{subtotalPrice.toLocaleString()}</span>
      </h2>
    </div>
  );
};

export default PriceDetails;
