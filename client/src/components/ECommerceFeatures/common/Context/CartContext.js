import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const shoppingCart = [
    {
      id: 1,
      image: "https://i.imgur.com/Dft4n8I.jpeg",
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      price: 923,
    },
    {
      id: 2,
      image: "https://i.imgur.com/ErXWKty.jpeg",
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      price: 1224,
    },
    {
      id: 3,
      image: "https://i.imgur.com/diOBNEM.jpeg",
      title:
        "SMOWKLY Men's Pyjama Set || T-Shirt and Shorts Set for Men || Night Wear for Men || Night Suit for Men",
      subtitle: "Sweatshirt",
      price: 699,
    },
  ];

  const [activeOrders, setActiveOrders] = useState(shoppingCart);
  const [cancelledOrders, setCancelledOrders] = useState([]);
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

  const cancelOrder = (index) => {
    setCancelledOrders((prev) => [...prev, activeOrders[index]]);
    setActiveOrders((prev) => prev.filter((_, i) => i !== index));
    setQuantities((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        activeOrders,
        cancelledOrders,
        quantities,
        incrementQuantity,
        decrementQuantity,
        subtotalPrice,
        totalItems,
        cancelOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for consuming the CartContext
export const useCart = () => useContext(CartContext);
