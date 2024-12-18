import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import OrderTitles from "./orderTitles";
import NoResult from "../common/Others/noResult";

const OrderCancelled = () => {
  const [cancelledOrders, setCancelledOrders] = useState([]); // State to hold the list of cancelled orders

  // Fetch cancelled orders on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchCancelledOrders(); // Fetch cancelled orders
  }, []);

  // Function to fetch cancelled orders
  const fetchCancelledOrders = async () => {
    try {
      const res = await axios.get(
        "https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/cancelled"
      );
      setCancelledOrders(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  // Function to remove cancelled order from history
  const handleRemoveOrder = async (id) => {
    try {
      await axios.delete(
        `https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/cancelled/${id}`
      );
      setCancelledOrders(cancelledOrders.filter((order) => order._id !== id));
      alert("Order removed successfully!");
    } catch (err) {
      console.error("Error deleting order", err);
      alert("Failed to remove order.");
    }
  };

  return (
    <>
      <Header />

      <main className="bg-gray-200 p-3 sm:p-5 text-gray-900">
        <OrderTitles cancelled={"underline font-bold"} />

        {cancelledOrders.length === 0 ? (
          <NoResult /> // Display if no cancelled orders
        ) : (
          <section className="p-3 sm:p-5 rounded-b-lg bg-white flex flex-col items-center">
            <div className="w-full md:w-3/4 bg-gray-200 rounded-lg border border-gray-300">
              <h3 className="text-gray-500 font-medium mb-2 py-2 text-center">
                CANCELLED ORDERS
              </h3>
              <div className="flex flex-col bg-white rounded-b-lg">
                {cancelledOrders.map((cancel) => {
                  return (
                    <div
                      className="flex flex-col items-center sm:items-start sm:flex-row gap-3 lg:gap-10 border-t border-t-gray-300 px-5 py-3"
                      key={cancel._id}
                    >
                      <img
                        className="w-32 sm:w-28"
                        src={cancel.image}
                        alt="Cart Product"
                      />

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-10 sm:justify-between sm:w-full">
                        <div className="sm:w-1/2 lg:w-3/5">
                          <p className="text-sm sm:text-base">{cancel.title}</p>
                          <p className="text-sm lg:text-base font-bold my-2 sm:my-3">
                            ₹.
                            {cancel.price}
                          </p>
                          <p>{cancel.noOfItems} items</p>
                          <p className="text-sm md:text-base mt-1 sm:mt-3 text-red-600">
                            Your order has been cancelled successfully.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 sm:flex-col">
                            <p className="text-sm lg:text-base">
                              Total price<span className="sm:hidden">:</span>
                            </p>
                            <p className="font-bold sm:my-1">
                              ₹.
                              {cancel.price * cancel.noOfItems}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemoveOrder(cancel._id)} // Remove cancelled order
                            className="border-2 border-gray-300 rounded-3xl p-1 sm:p-2 text-xs hover:bg-gray-300 mt-5 mb-2"
                          >
                            Remove Order history
                          </button>
                        </div>
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
