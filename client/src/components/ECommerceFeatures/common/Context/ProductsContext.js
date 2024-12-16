import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Search functionalities
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  return (
    <ProductContext.Provider
      value={{
        // Filtered Products
        filteredProducts,
        setFilteredProducts,

        // Products
        selectedProduct,
        setSelectedProduct,
        categories,
        categoryMapping,
        features,
        featureMapping,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for consuming the CartContext
export const useProduct = () => useContext(ProductContext);
