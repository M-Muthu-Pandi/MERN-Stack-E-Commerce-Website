import { useCart } from "../common/Context/CartContext";

// Displays a summary of the ordered items
const ReviewItems = () => {
  const { shoppingCart } = useCart();
  return (
    <div className="bg-white p-5 rounded-lg mt-5">
      <h2 className="text-gray-500 font-medium mb-2 pb-2">ORDER SUMMARY</h2>

      <div className="flex flex-col">
        {shoppingCart.map((cart, index) => {
          return (
            <div
              className="flex flex-col items-center sm:items-start sm:flex-row gap-3 lg:gap-10 border-y border-y-gray-300 px-5 py-3"
              key={index}
            >
              <img
                className="w-32 sm:w-28"
                src={cart.image}
                alt="Cart Product"
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 sm:justify-between sm:w-full">
                <div className="sm:w-1/2 lg:w-3/5">
                  <p className="text-sm sm:text-base">{cart.title}</p>
                  <p className="text-sm lg:text-base font-bold my-2 sm:my-3">
                    ₹.
                    {cart.price}
                  </p>
                  <p>{cart.noOfItems} items</p>
                </div>
                <div className="flex items-center gap-1.5 sm:flex-col">
                  <p className="text-sm lg:text-base">
                    Total price<span className="sm:hidden">:</span>
                  </p>
                  <p className="font-bold sm:my-1">
                    ₹.
                    {cart.price * cart.noOfItems}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewItems;
