import plus from "../../../assets/plus.png";
import minus from "../../../assets/minus.png";

const ShoppingCart = ({
  shoppingCart,
  quantities,
  incrementQuantity,
  decrementQuantity,
  totalItems,
  subtotalPrice,
}) => {
  return (
    <section className="p-3 bg-white rounded-md md:flex-grow md:basis-3/4">
      <h1 className="text-2xl lg:text-3xl font-medium mb-5">Shopping Cart</h1>

      <div className="flex flex-col">
        {shoppingCart.map((cart, index) => {
          return (
            <div
              className="flex flex-col items-center sm:items-start sm:flex-row gap-3 sm:gap-20 border-y border-y-gray-300 px-5 py-3"
              key={index}
            >
              <img className="w-36 sm:32 h-40 sm:36" src={cart.image} alt="Cart Product" />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 sm:justify-between sm:w-full">
                <div className="sm:w-1/2 lg:w-3/4">
                  <p className="text-sm sm:text-base lg:text-lg">{cart.title}</p>
                  <p className="text-sm lg:text-lg font-bold my-2 sm:my-3">
                    {cart.currency}
                    {cart.price}
                  </p>
                  <div className="w-16 sm:w-20 flex justify-between items-center border sm:border-2 border-gray-900 rounded-3xl px-2">
                    <button onClick={() => decrementQuantity(index)}>
                      <img className="w-2.5 sm:w-3" src={minus} alt="Minus button" />
                    </button>
                    <p className="font-medium sm:text-lg">{quantities[index]}</p>
                    <button onClick={() => incrementQuantity(index)}>
                      <img className="w-2.5 sm:w-3" src={plus} alt="Plus button" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:flex-col">
                  <p className="text-sm sm:text-base">Total price<span className="sm:hidden">:</span></p>
                  <p className="md:text-lg font-bold sm:my-1">
                    {cart.currency}
                    {cart.price * quantities[index]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-end m-3">
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-3">
          Subtotal ({totalItems} items): ₹.{subtotalPrice.toLocaleString()}
        </h2>
        <button className="md:hidden bg-yellow-400 rounded-3xl p-2 text-sm hover:bg-yellow-500 w-40">
          Proceed to buy
        </button>
      </div>
    </section>
  );
};

export default ShoppingCart;
