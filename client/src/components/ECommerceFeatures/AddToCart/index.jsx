import Footer from "../common/Footer";
import Header from "../common/Header";
import ProceedBuy from "./proceedBuy";
import ShoppingCart from "./shoppingCart";

const Cart = () => {
  return (
    <>
      <Header />

      <main className="bg-gray-200 p-5 flex justify-between items-start gap-5 text-gray-900">
        <ShoppingCart />
        <ProceedBuy />
      </main>

      <Footer />
    </>
  );
};

export default Cart;
