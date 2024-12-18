import { useNavigate } from "react-router-dom";
import { useCart } from "../common/Context/CartContext";
import plus from "../../../assets/plus.png";
import minus from "../../../assets/minus.png";
import bin from "../../../assets/bin.png";

const ShoppingCart = () => {
  const { shoppingCart, updateCart, totalPrice, totalItems, handleRemoveCart } =
    useCart(); // Accessing cart data, update and remove functions from context
  const navigate = useNavigate();

  // Increment quantity of a product
  const handleIncrement = (id, currentQty) => {
    updateCart(id, currentQty + 1);
  };

  // Decrement quantity of a product (if quantity > 1)
  const handleDecrement = (id, currentQty) => {
    if (currentQty > 1) {
      updateCart(id, currentQty - 1);
    }
  };

  return (
    <section className="p-3 bg-white rounded-lg flex-grow basis-3/4">
      <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium mb-2 pb-2">
        SHOPPING CART
      </h1>

      <div className="flex flex-col">
        {shoppingCart.map((cart) => {
          return (
            <div
              className="flex flex-col items-center sm:items-start sm:flex-row gap-3 sm:gap-20 border-y border-y-gray-300 px-5 py-3"
              key={cart._id}
            >
              <img
                className="w-36 sm:w-32"
                src={cart.image}
                alt="Cart Product"
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 sm:justify-between sm:w-full">
                <div className="sm:w-1/2 lg:w-3/4">
                  <p className="text-sm sm:text-base lg:text-lg">
                    {cart.title}
                  </p>
                  <p className="text-sm lg:text-lg font-bold my-2 sm:my-3">
                    ₹.
                    {cart.price}
                  </p>
                  <div className="flex gap-2">
                    {/* Buttons for increment and decrement */}
                    <div className="w-16 sm:w-20 flex justify-between items-center border sm:border-1 border-gray-900 rounded-3xl px-2">
                      <button
                        onClick={() =>
                          handleDecrement(cart._id, cart.noOfItems)
                        }
                      >
                        <img
                          className="w-2.5 sm:w-3 hover:bg-gray-300"
                          src={minus}
                          alt="Minus button"
                        />
                      </button>
                      <p className="font-medium sm:text-lg">{cart.noOfItems}</p>
                      <button
                        onClick={() =>
                          handleIncrement(cart._id, cart.noOfItems)
                        }
                      >
                        <img
                          className="w-2.5 sm:w-3 hover:bg-gray-300"
                          src={plus}
                          alt="Plus button"
                        />
                      </button>
                    </div>
                    {/* Button for removing product from cart */}
                    <button
                      onClick={() => handleRemoveCart(cart._id)}
                      className="border sm:border border-gray-900 hover:bg-gray-300 rounded-full px-2"
                    >
                      <img
                        className="w-3.5 sm:w-4"
                        src={bin}
                        alt="Delete button"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:flex-col">
                  <p className="text-sm sm:text-base">
                    Total price<span className="sm:hidden">:</span>
                  </p>
                  <p className="md:text-lg font-bold sm:my-1">
                    ₹.
                    {cart.price * cart.noOfItems}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Displaying subtotal and proceed to buy button */}
      <div className="text-center md:text-end m-3">
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-3">
          Subtotal ({totalItems} items): ₹.
          {totalPrice}
        </h2>
        <button
          onClick={() => navigate("/placeorder")} // Navigate to place order page
          className="md:hidden bg-yellow-400 rounded-3xl p-2 text-sm hover:bg-yellow-500 w-40"
        >
          Proceed to buy
        </button>
      </div>
    </section>
  );
};

export default ShoppingCart;
