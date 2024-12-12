import Footer from "../common/Footer";
import Header from "../common/Header";
import OrderTitles from "./orderTitles";
import NoResult from "./common/noResult";

const OrderReturned = () => {
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
