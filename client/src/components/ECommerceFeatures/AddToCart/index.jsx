import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ProceedBuy from "./proceedBuy";
import ShoppingCart from "./shoppingCart";

const Cart = () => {
  const shoppingCart = [
    {
      image: "https://i.imgur.com/Dft4n8I.jpeg",
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      currency: "₹.",
      price: 923,
    },
    {
      image: "https://i.imgur.com/ErXWKty.jpeg",
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      currency: "₹.",
      price: 923,
    },
    {
      image: "https://i.imgur.com/jVeXXId.jpeg",
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      currency: "₹.",
      price: 923,
    },
    {
      image: "https://i.imgur.com/Mapffgp.jpeg",
      title: "Allen Solly Men Sweatshirt Allen Solly Men Sweatshirt Allen Solly Men Sweatshirt Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      currency: "₹.",
      price: 923,
    },
  ];

  const [quantities, setQuantities] = useState(shoppingCart.map(() => 1));

  const incrementQuantity = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const decrementQuantity = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index && qty > 0 ? qty - 1 : qty))
    );
  };

  const subtotalPrice = quantities.reduce(
    (total, qty, index) => total + qty * shoppingCart[index].price,
    0
  );
  const totalItems = quantities.reduce((total, qty) => total + qty, 0);

  return (
    <>
      <Header />
      <main className="bg-gray-200 p-5 flex justify-between items-start gap-5 text-gray-900">
        <ShoppingCart
          shoppingCart={shoppingCart}
          quantities={quantities}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          totalItems={totalItems}
          subtotalPrice={subtotalPrice}
        />
        <ProceedBuy
          totalItems={totalItems}
          subtotalPrice={subtotalPrice}
        />
      </main>

      <Footer />
    </>
  );
};

export default Cart;
