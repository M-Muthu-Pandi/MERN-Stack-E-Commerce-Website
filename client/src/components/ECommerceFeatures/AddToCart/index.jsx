import { useEffect } from "react";
import { useCart } from "../common/Context/CartContext";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ProceedBuy from "./proceedBuy";
import ShoppingCart from "./shoppingCart";
import NoResult from "../common/Others/noResult";

const Cart = () => {
  const { shoppingCart } = useCart(); // Accessing shopping cart from context

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* Conditional rendering if the cart is empty or not */}
      {shoppingCart.length === 0 ? (
        <NoResult />
      ) : (
        <main className="bg-gray-200 p-5 flex justify-between items-start gap-5 text-gray-900">
          <ShoppingCart /> {/* Display cart items */}
          <ProceedBuy /> {/* Display checkout option */}
        </main>
      )}

      <Footer />
    </>
  );
};

export default Cart;
