import Footer from "../common/Footer";
import Header from "../common/Header";
import OrderTitles from "./orderTitles";
import { useCart } from "../common/Context/CartContext";

const Orders = () => {
  const { activeOrders, quantities, cancelOrder } = useCart();

  return (
    <>
      <Header />
      <main className="bg-gray-200 p-3 sm:p-5 text-gray-900">
        <OrderTitles ordered={"underline font-bold"} />

        <section className="p-3 sm:p-5 rounded-b-lg bg-white flex flex-col items-center">
          <div className="w-full md:w-3/4 bg-gray-200 rounded-lg border border-gray-300">
            <h3 className="text-gray-500 font-medium mb-2 py-2 text-center">
              ON THE WAY
            </h3>
            <div className="flex flex-col bg-white rounded-b-lg">
              {activeOrders.map((cart, index) => {
                return (
                  <div
                    className="flex flex-col items-center sm:items-start sm:flex-row gap-3 lg:gap-20 border-t border-t-gray-300 px-5 py-3"
                    key={cart.id}
                  >
                    <img
                      className="w-36 sm:32 h-40 sm:36"
                      src={cart.image}
                      alt="Cart Product"
                    />

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-10 sm:justify-between sm:w-full">
                      <div className="sm:w-1/2 lg:w-3/5">
                        <p className="text-sm sm:text-base">{cart.title}</p>
                        <p className="text-sm lg:text-base font-bold my-2 sm:my-3">
                          ₹.
                          {cart.price}
                        </p>
                        <p>{quantities[index]} items</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 sm:flex-col">
                          <p className="text-sm lg:text-base">
                            Total price<span className="sm:hidden">:</span>
                          </p>
                          <p className="font-bold sm:my-1">
                            ₹.
                            {cart.price * quantities[index]}
                          </p>
                        </div>
                        <button
                          onClick={() => cancelOrder(index)}
                          className="border-2 border-gray-300 rounded-3xl p-1 sm:p-2 text-xs hover:bg-gray-300 mt-5 mb-2"
                        >
                          Cancel Order
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Orders;
