import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Products from "./Products";
import FilterTitles from "./filterTitles";

const SearchAndFilter = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="flex">
        {/* Filter sidebar with categories */}
        <FilterTitles allproducts={"font-bold"} />
        <Products /> {/* Display All products */}
      </main>
      <Footer />
    </>
  );
};

export default SearchAndFilter;
