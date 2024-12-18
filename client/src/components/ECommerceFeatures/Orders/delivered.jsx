import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import OrderTitles from "./orderTitles";
import NoResult from "../common/Others/noResult";

const OrderDelivered = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-200 p-3 sm:p-5 text-gray-900">
        <OrderTitles delivered={"underline font-bold"} />
        <NoResult />
      </main>
      <Footer />
    </>
  );
};

export default OrderDelivered;
