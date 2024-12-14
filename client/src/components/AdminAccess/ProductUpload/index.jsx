import Footer from "../../ECommerceFeatures/common/Footer";
import Header from "../../ECommerceFeatures/common/Header";
import CatProductUpload from "./CategoriesProductUpload";
import TopProductUpload from "./TopPicksProductUpload";

const ProductUpload = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-5 items-center p-3 sm:p-5">
        <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium mb-3 pb-2">
          ADD PRODUCTS
        </h1>

        <CatProductUpload />
        <TopProductUpload />
      </main>
      <Footer />
    </>
  );
};

export default ProductUpload;
