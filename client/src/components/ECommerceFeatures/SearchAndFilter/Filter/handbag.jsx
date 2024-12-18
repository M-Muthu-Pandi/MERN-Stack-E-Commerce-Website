import axios from "axios";
import { useState, useEffect } from "react";
import { useProduct } from "../../common/Context/ProductsContext";
import { useAdmin } from "../../common/Context/AdminContext";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import FilterTitles from "../filterTitles";
import SingleProduct from "../../common/SingleProduct";
import bin from "../../../../assets/bin.png";

// Component to display Handbag filtered products
const HandbagFilter = () => {
  const admin = useAdmin();
  const { selectedProduct, setSelectedProduct } = useProduct();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Fetching the list of Handbag from the backend API
    axios
      .get(
        "https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/handbags"
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  // Function to remove a product by id
  const handleRemoveProduct = async (id) => {
    try {
      await axios.delete(
        `https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/handbags/${id}`
      );
      setProducts((prev) => prev.filter((product) => product._id !== id));
      alert("Product removed successfully!");
    } catch (error) {
      alert("Failed to remove Product. Check the console for details.");
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main className="flex">
        <FilterTitles handbag={"font-bold"} />

        <section className="flex-grow basis-4/5 p-2 sm:px-5 sm:pb-5">
          <h2 className="pt-3 bg-white sticky top-12 sm:top-16 z-40 text-lg sm:text-xl md:text-2xl text-gray-900 font-medium border-b border-b-gray-300 pb-1 sm:pb-3">
            <a
              className="hover:text-green-500 hover:underline hover:underline-offset-4"
              href="#home"
            >
              Handbags
            </a>
          </h2>

          {/* Displaying the list of products */}
          <div className="rounded-lg bg-white flex justify-around flex-wrap gap-1 sm:gap-5 my-1 sm:my-5">
            {products.map((item) => (
              <div
                key={item._id}
                className="relative flex flex-col basis-[49%] sm:basis-[30%] lg:basis-[23%] border rounded-md p-2"
              >
                <img
                  className="h-28 sm:h-44 rounded-md cursor-pointer"
                  src={item.image}
                  alt={item.subtitle}
                  onClick={() => setSelectedProduct(item)}
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

                {/* Show delete button for admins */}
                {admin ? (
                  <button
                    onClick={() => handleRemoveProduct(item._id)}
                    className="z-30 absolute bottom-2 right-2 border sm:border border-gray-900 hover:bg-gray-300 rounded-full p-1"
                  >
                    <img
                      className="w-3.5 sm:w-4"
                      src={bin}
                      alt="Delete button"
                    />
                  </button>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>

          {/* Display selected product details */}
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

export default HandbagFilter;
