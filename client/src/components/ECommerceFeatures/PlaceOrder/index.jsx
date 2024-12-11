import Footer from "../common/Footer";
import Header from "../common/Header";
import DeliveryDetails from "./deliveryDetails";
import OrderSummary from "./orderSummary";
import PaymentMethod from "./paymentMethod";
import PriceDetails from "./priceDetails";

const PlaceOrder = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-200 p-3 sm:p-5 md:flex justify-between items-start gap-5 text-gray-900">
        <section className="rounded-md md:flex-grow md:basis-3/5">
          <DeliveryDetails />
          <OrderSummary />
        </section>
        <section className="flex-grow basis-2/5">
          <PriceDetails />
          <PaymentMethod />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PlaceOrder;
