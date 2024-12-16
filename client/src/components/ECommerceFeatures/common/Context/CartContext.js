import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cartandplaceorder")
      .then((res) => {
        setShoppingCart(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  const updateCart = async (id, updatedQty) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/cartandplaceorder/${id}`,
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

  const calculateTotalPrice = () => {
    return shoppingCart.reduce(
      (total, item) => total + item.price * item.noOfItems,
      0
    );
  };

  const totalItems = shoppingCart.length;

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        updateCart,
        totalPrice: calculateTotalPrice(),
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
