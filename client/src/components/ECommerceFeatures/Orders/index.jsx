import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import OrderTitles from "./orderTitles";
import NoResult from "../common/Others/noResult";

const Orders = () => {
  const [activeOrders, setActiveOrders] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/ordered");
      setActiveOrders(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const cancelOrder = async (id) => {
    try {
      // Call the backend to cancel the order
      const res = await axios.post(
        `http://localhost:4000/api/ordered/cancel/${id}`
      );
      if (res.status === 200) {
        alert(res.data.message);
        // Update the activeOrders state after cancellation
        setActiveOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== id)
        );
      }
    } catch (err) {
      console.error("Error cancelling order", err);
      alert("Failed to cancel the order");
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-200 p-3 sm:p-5 text-gray-900">
        <OrderTitles ordered={"underline font-bold"} />
        {activeOrders.length === 0 ? (
          <NoResult />
        ) : (
          <section className="p-3 sm:p-5 rounded-b-lg bg-white flex flex-col items-center">
            <div className="w-full md:w-3/4 bg-gray-200 rounded-lg border border-gray-300">
              <h3 className="text-gray-500 font-medium mb-2 py-2 text-center">
                ON THE WAY
              </h3>
              <div className="flex flex-col bg-white rounded-b-lg">
                {activeOrders.map((order) => {
                  return (
                    <div
                      className="flex flex-col items-center sm:items-start sm:flex-row gap-3 lg:gap-10 border-t border-t-gray-300 px-5 py-3"
                      key={order._id}
                    >
                      <img
                        className="w-32 sm:28"
                        src={order.image}
                        alt="Cart Product"
                      />

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-10 sm:justify-between sm:w-full">
                        <div className="sm:w-1/2 lg:w-3/5">
                          <p className="text-sm sm:text-base">{order.title}</p>
                          <p className="text-sm lg:text-base font-bold my-2 sm:my-3">
                            ₹.
                            {order.price}
                          </p>
                          <p>{order.noOfItems} items</p>
                          <p className="text-sm md:text-base mt-1 sm:mt-3 text-green-600">
                            Your order is on its way and will reach you in 2
                            days.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 sm:flex-col">
                            <p className="text-sm lg:text-base">
                              Total price<span className="sm:hidden">:</span>
                            </p>
                            <p className="font-bold sm:my-1">
                              ₹.
                              {order.price * order.noOfItems}
                            </p>
                          </div>
                          <button
                            onClick={() => cancelOrder(order._id)}
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
        )}
      </main>
      <Footer />
    </>
  );
};

export default Orders;
