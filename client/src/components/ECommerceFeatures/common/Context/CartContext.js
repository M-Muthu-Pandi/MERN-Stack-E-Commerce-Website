import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  // Fetch cart data from the API
  useEffect(() => {
    axios
      .get(
        "https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/cartandplaceorder"
      )
      .then((res) => {
        setShoppingCart(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  // Update the quantity of a product in the cart
  const updateCart = async (id, updatedQty) => {
    try {
      const response = await axios.put(
        `https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/cartandplaceorder/${id}`,
        {
          noOfItems: updatedQty,
        }
      );

      setShoppingCart((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, noOfItems: updatedQty } : item
        )
      );
      console.log(response.data);
    } catch (err) {
      console.error("Error updating cart", err);
    }
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return shoppingCart.reduce(
      (total, item) => total + item.price * item.noOfItems,
      0
    );
  };

  const totalItems = shoppingCart.length;

  // Remove a product from the cart
  const handleRemoveCart = async (id) => {
    try {
      await axios.delete(
        `https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/cartandplaceorder/${id}`
      );
      setShoppingCart((prev) => prev.filter((cart) => cart._id !== id));
      alert("Cart removed successfully!");
    } catch (error) {
      alert("Failed to remove Cart. Check the console for details.");
      console.error(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        updateCart,
        totalPrice: calculateTotalPrice(),
        totalItems,
        handleRemoveCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook for consuming CartContext
export const useCart = () => useContext(CartContext);
