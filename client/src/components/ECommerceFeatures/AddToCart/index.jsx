import { useEffect } from "react";
import { useCart } from "../common/Context/CartContext";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ProceedBuy from "./proceedBuy";
import ShoppingCart from "./shoppingCart";
import NoResult from "../common/Others/noResult";

const Cart = () => {
  const { shoppingCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {shoppingCart.length === 0 ? (
        <NoResult />
      ) : (
        <main className="bg-gray-200 p-5 flex justify-between items-start gap-5 text-gray-900">
          <ShoppingCart />
          <ProceedBuy />
        </main>
      )}

      <Footer />
    </>
  );
};

export default Cart;
