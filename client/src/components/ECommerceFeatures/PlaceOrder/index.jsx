import { useState, useEffect } from "react";
import { useCart } from "../common/Context/CartContext";
import Header from "../common/Header";
import Footer from "../common/Footer";
import DeliveryDetails from "./deliveryDetails";
import ReviewItems from "./reviewItems";
import PriceDetails from "./priceDetails";
import PaymentMethod from "./paymentMethod";
import PlaceYourOrder from "./placeYourOrder";
import NoResult from "../common/Others/noResult";

const PlaceOrder = () => {
  const { shoppingCart } = useCart();
  const [selectedAddress, setSelectedAddress] = useState(null); // Track selected delivery address
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Track selected payment method

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* If shopping cart is empty, show 'No Result' */}
      {shoppingCart.length === 0 ? (
        <NoResult />
      ) : (
        <main className="bg-gray-200 p-3 sm:p-5 md:flex justify-between items-start gap-5 text-gray-900">
          <section className="md:flex-grow md:basis-3/5">
            <DeliveryDetails setSelectedAddress={setSelectedAddress} />
            <ReviewItems />
          </section>
          <section className="flex-grow basis-2/5">
            <PriceDetails />
            <PaymentMethod
              setSelectedPaymentMethod={setSelectedPaymentMethod}
            />
            <PlaceYourOrder
              isOrderPlaceable={!!selectedAddress && !!selectedPaymentMethod}
            />
          </section>
        </main>
      )}

      <Footer />
    </>
  );
};

export default PlaceOrder;
