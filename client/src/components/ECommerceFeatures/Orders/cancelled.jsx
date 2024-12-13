import Footer from "../common/Footer";
import Header from "../common/Header";
import OrderTitles from "./orderTitles";
import { useCart } from "../common/Context/CartContext";
import NoResult from "./common/noResult";

const OrderCancelled = () => {
  const { cancelledOrders } = useCart();

  return (
    <>
      <Header />

      <main className="bg-gray-200 p-3 sm:p-5 text-gray-900">
        <OrderTitles cancelled={"underline font-bold"} />

        {cancelledOrders.length === 0 ? (
          <NoResult />
        ) : (
          <section className="p-3 sm:p-5 rounded-b-lg bg-white flex flex-col items-center">
            <div className="w-full md:w-3/4 bg-gray-200 rounded-lg border border-gray-300">
              <h3 className="text-gray-500 font-medium mb-2 py-2 text-center">
                CANCELLED ORDERS
              </h3>
              <div className="flex flex-col bg-white rounded-b-lg">
                {cancelledOrders.map((cart) => {
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

                      <div className="sm:w-1/2 lg:w-3/5">
                        <p className="text-sm sm:text-base">{cart.title}</p>
                        <p className="text-sm lg:text-base font-bold my-2 sm:my-3">
                          ₹.
                          {cart.price}
                        </p>
                        <p className="text-sm md:text-base mt-1 sm:mt-3 text-red-600">
                          Your order has been cancelled successfully.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default OrderCancelled;
