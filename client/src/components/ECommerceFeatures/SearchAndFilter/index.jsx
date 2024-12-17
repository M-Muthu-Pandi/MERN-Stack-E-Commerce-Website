import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Products from "./Products/products";
import FilterTitles from "./filterTitles";

const SearchAndFilter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="flex">
        <FilterTitles allproducts={"font-bold"} />
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default SearchAndFilter;
