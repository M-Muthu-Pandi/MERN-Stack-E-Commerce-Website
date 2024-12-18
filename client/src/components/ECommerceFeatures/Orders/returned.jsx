import { useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import OrderTitles from "./orderTitles";
import NoResult from "../common/Others/noResult";

const OrderReturned = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-200 p-3 sm:p-5 text-gray-900">
        <OrderTitles returned={"underline font-bold"} />
        <NoResult />
      </main>
      <Footer />
    </>
  );
};

export default OrderReturned;
