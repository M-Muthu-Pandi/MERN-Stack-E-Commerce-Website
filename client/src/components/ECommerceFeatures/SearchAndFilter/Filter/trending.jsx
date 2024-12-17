import { useProduct } from "../../common/Context/ProductsContext";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import FilterTitles from "../filterTitles";
import SingleProduct from "../../common/SingleProduct";
import { useState, useEffect } from "react";
import axios from "axios";

const TrendingFilter = () => {
  const { selectedProduct, setSelectedProduct } = useProduct();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/trending")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="flex">
        <FilterTitles trending={"font-bold"} />

        <section className="flex-grow basis-4/5 p-2 sm:px-5 sm:pb-5">
          <h2 className="pt-3 bg-white sticky top-12 sm:top-16 z-40 text-lg sm:text-xl md:text-2xl text-gray-900 font-medium border-b border-b-gray-300 pb-1 sm:pb-3">
            <a
              className="hover:text-green-500 hover:underline hover:underline-offset-4"
              href="#home"
            >
              Trending
            </a>
          </h2>
          <div className="rounded-lg bg-white flex justify-around flex-wrap gap-1 sm:gap-5 my-1 sm:my-5">
            {products.map((item) => (
              <div
                key={item._id}
                className="flex flex-col basis-[49%] sm:basis-[30%] lg:basis-[23%] border rounded-md p-2"
                onClick={() => setSelectedProduct(item)}
              >
                <img
                  className="h-28 sm:h-44 rounded-md"
                  src={item.image}
                  alt={item.subtitle}
                />
                <p className="my-2 text-xs">{item.title}</p>
                <div className="sm:flex items-center gap-2">
                  <img
                    className="w-16 sm:w-20"
                    src={item.rating}
                    alt="Rating"
                  />
                  <p className="text-xs sm:text-sm">
                    {item.review} <span className="sm:hidden">Reviews</span>
                  </p>
                </div>
                <p className="font-medium text-sm sm:text-base mt-1">
                  ₹.{item.price}
                </p>
              </div>
            ))}
          </div>
          <SingleProduct
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TrendingFilter;
