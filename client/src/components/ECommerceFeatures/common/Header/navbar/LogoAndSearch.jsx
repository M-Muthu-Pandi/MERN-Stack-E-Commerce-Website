import { useRef, useState } from "react";
import search from "../../../../../assets/search.png";
import Logo from "../../Others/Logo";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/ProductsContext";

const LogoAndSearch = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { categoryMapping, setFilteredProducts } = useProduct();
  const [searchQuery, setSearchQuery] = useState("");

  const handleFocus = () => {
    containerRef.current.classList.add("ring-2", "ring-orange-300");
  };

  const handleBlur = () => {
    containerRef.current.classList.remove("ring-2", "ring-orange-300");
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Combine all products from categories and features
    const allProducts = Object.values(categoryMapping).flat();

    // Filter products based on the search query
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the filtered products in context
    setFilteredProducts(filtered);
    navigate("/search");
  };

  return (
    <>
      <div className="border border-gray-900 p-1 hover:border-white">
        <Logo />
      </div>

      <form
        ref={containerRef}
        onSubmit={handleSearch}
        className="flex w-1/2 md:w-1/3 lg:w-1/2 xl:w-2/3 rounded-sm mx-1"
      >
        <input
          className="w-4/5 flex-grow sm:basis-full border-none rounded-l-sm focus:outline-none text-sm px-3 py-1.5 sm:py-2.5"
          type="text"
          placeholder="Search for products, brands and more..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button
          className="py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-r-sm bg-orange-300 hover:bg-orange-400"
          type="submit"
        >
          <img className="w-4 sm:w-5" src={search} alt="Search icon" />
        </button>
      </form>
    </>
  );
};

export default LogoAndSearch;
