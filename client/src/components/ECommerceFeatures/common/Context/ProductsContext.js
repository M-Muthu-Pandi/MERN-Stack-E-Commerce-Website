import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Products
  // Categories
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Kid's Fashion",
    "Footwear",
    "Luggage Bags",
    "Watches",
    "Handbags",
    "Sunglasses",
  ];

  const [menClothing, setMenclothing] = useState([]);
  const [womenClothing, setWomenclothing] = useState([]);
  const [kids, setKids] = useState([]);
  const [footWear, setFootwear] = useState([]);
  const [luggages, setLuggages] = useState([]);
  const [watches, setWatches] = useState([]);
  const [handbags, setHandbags] = useState([]);
  const [sunGlasses, setSunGlasses] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:4000/api/men"),
      axios.get("http://localhost:4000/api/women"),
      axios.get("http://localhost:4000/api/kids"),
      axios.get("http://localhost:4000/api/footwear"),
      axios.get("http://localhost:4000/api/luggages"),
      axios.get("http://localhost:4000/api/watches"),
      axios.get("http://localhost:4000/api/handbags"),
      axios.get("http://localhost:4000/api/sunglass"),
    ])
      .then(
        ([
          menRes,
          womenRes,
          kidsRes,
          footwearRes,
          luggageRes,
          watchRes,
          handbagRes,
          sunglassRes,
        ]) => {
          setMenclothing(menRes.data);
          setWomenclothing(womenRes.data);
          setKids(kidsRes.data);
          setFootwear(footwearRes.data);
          setLuggages(luggageRes.data);
          setWatches(watchRes.data);
          setHandbags(handbagRes.data);
          setSunGlasses(sunglassRes.data);
        }
      )
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  const categoryMapping = {
    "Men's Clothing": menClothing,
    "Women's Clothing": womenClothing,
    "Kid's Fashion": kids,
    Footwear: footWear,
    "Luggage Bags": luggages,
    Watches: watches,
    Handbags: handbags,
    Sunglasses: sunGlasses,
  };

  // Featured Items
  const features = [
    "Trending",
    "Best Sellers",
    "Today's deals",
    "New Arrivals",
  ];

  const [trending, setTrending] = useState([]);
  const [bestseller, setBestseller] = useState([]);
  const [todaydeal, setTodaydeal] = useState([]);
  const [newarrival, setNewarrival] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:4000/api/trending"),
      axios.get("http://localhost:4000/api/bestseller"),
      axios.get("http://localhost:4000/api/todaydeals"),
      axios.get("http://localhost:4000/api/newarrival"),
    ])
      .then(([trendingRes, bestsellerRes, todaydealRes, newarrivalRes]) => {
        setTrending(trendingRes.data);
        setBestseller(bestsellerRes.data);
        setTodaydeal(todaydealRes.data);
        setNewarrival(newarrivalRes.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  const featureMapping = {
    Trending: trending,
    "Best Sellers": bestseller,
    "Today's deals": todaydeal,
    "New Arrivals": newarrival,
  };

  // Cart and Orders
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
    <ProductContext.Provider
      value={{
        // Products
        selectedProduct,
        setSelectedProduct,
        categories,
        categoryMapping,
        features,
        featureMapping,

        // Cart and Orders
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
    </ProductContext.Provider>
  );
};

// Custom hook for consuming the CartContext
export const useCart = () => useContext(ProductContext);
