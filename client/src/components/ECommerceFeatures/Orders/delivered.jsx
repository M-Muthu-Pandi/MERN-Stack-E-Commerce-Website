import Footer from "../common/Footer";
import Header from "../common/Header";
import OrderTitles from "./orderTitles";
import folder from "../../../assets/folder.png";

const OrderDelivered = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-200 p-3 sm:p-5 text-gray-900">
        <OrderTitles delivered={"underline font-bold"} />
        <section className="rounded-b-lg bg-white px-5 py-20 lg:py-40 flex flex-col items-center">
          <img className="w-20" src={folder} alt="No files" />
          <h3 className="font-medium text-xl">Sorry, no results found</h3>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OrderDelivered;
