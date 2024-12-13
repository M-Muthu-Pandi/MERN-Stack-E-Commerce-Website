import Header from "../common/Header";
import Footer from "../common/Footer";
import Filter from "./filter";
import Products from "./products";

const SearchAndFilter = () => {
  return (
    <>
      <Header />
      <main className="flex bg-gray-200">
        <Filter />
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default SearchAndFilter;
