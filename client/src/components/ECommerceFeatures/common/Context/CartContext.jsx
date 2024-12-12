import { createContext, useContext, useState } from "react";

// Create the CartContext
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
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
      price: 1224,
    },
    {
      image: "https://i.imgur.com/diOBNEM.jpeg",
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      currency: "₹.",
      price: 699,
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
    <CartContext.Provider
      value={{
        shoppingCart,
        quantities,
        incrementQuantity,
        decrementQuantity,
        subtotalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for consuming the CartContext
export const useCart = () => useContext(CartContext);
