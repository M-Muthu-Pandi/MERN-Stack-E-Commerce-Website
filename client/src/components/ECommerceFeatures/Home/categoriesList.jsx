import React, { useRef, useState, useEffect } from "react";
import leftArrow from "../../../assets/left-arrow.png";
import rightArrow from "../../../assets/right-arrow.png";
import SingleProduct from "../common/SingleProduct";
import axios from "axios";

const CategoriesList = () => {
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

  const refs = useRef(categories.map(() => React.createRef()));

  const scrollLeft = (index) => {
    refs.current[index].current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = (index) => {
    refs.current[index].current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-5 px-2 sm:px-3 bg-blue-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mt-5 font-medium">
        Top Picks by Category
      </h2>
      {categories.map((category, index) => {
        const categoryItems = categoryMapping[category];

        return (
          <div
            key={index}
            id={category.toLowerCase().replace(" ", "-")}
            className="my-3 px-2 pt-2 pb-3 sm:px-5 sm:py-3 rounded-lg bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl italic font-semibold mb-3 text-gray-900">
              {category}
            </h3>
            <div className="relative">
              {/* Left Scroll Button */}
              <button
                onClick={() => scrollLeft(index)}
                aria-label={`Scroll Left for ${category}`}
                className="absolute top-1/2 left-1 transform -translate-y-1/2 px-1 md:px-2 py-2 md:py-5 border-2 border-transparent hover:border-gray-800 hover:ring-2 ring-white z-10 bg-white opacity-70"
              >
                <img className="w-5 lg:w-6" src={leftArrow} alt="Left Arrow" />
              </button>

              {/* Right Scroll Button */}
              <button
                onClick={() => scrollRight(index)}
                aria-label={`Scroll Right for ${category}`}
                className="absolute top-1/2 right-1 transform -translate-y-1/2 px-1 md:px-2 py-2 md:py-5 border-2 border-transparent hover:border-gray-800 hover:ring-2 ring-white z-10 bg-white opacity-50"
              >
                <img className="w-5 lg:w-6" src={rightArrow} alt="Left Arrow" />
              </button>
              <div
                ref={refs.current[index]}
                className="flex gap-2 sm:gap-5 text-xs sm:text-base overflow-x-auto scrollbar-hide scroll-smooth"
              >
                {categoryItems.map((item, idx) => {
                  return (
                    <div
                      className="flex flex-col w-32 min-w-32 sm:min-w-52 md:min-w-60 border rounded-md p-2"
                      key={idx}
                      onClick={() => setSelectedProduct(item)}
                    >
                      <img
                        className="h-28 sm:h-40 md:h-56 rounded-md"
                        src={item.image}
                        alt={item.subtitle}
                      />
                      <p className="my-2">{item.title}</p>
                      <div className="sm:flex items-center gap-2">
                        <img className="w-20" src={item.rating} alt="Rating" />
                        <p>
                          {item.review}{" "}
                          <span className="sm:hidden">Reviews</span>
                        </p>
                      </div>
                      <p className="font-medium text-sm sm:text-lg mt-1">
                        ₹.{item.price}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      <SingleProduct
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </section>
  );
};

export default CategoriesList;
