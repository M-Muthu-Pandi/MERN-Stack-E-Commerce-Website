import { useCart } from "../common/Context/ProductsContext";
import SingleProduct from "../common/SingleProduct";
import CategoryItems from "./categoryProductItem";
import TopPicksItems from "./toppicksProductItem";

const Products = () => {
  const { selectedProduct, setSelectedProduct } = useCart();
  return (
    <section className="flex-grow basis-4/5 p-2 sm:px-5 sm:pb-5">
      <h2 className="pt-3 bg-white sticky top-12 sm:top-16 z-40 text-lg sm:text-xl md:text-2xl text-gray-900 font-medium border-b border-b-gray-300 pb-1 sm:pb-3">
        <a
          className="hover:text-green-500 hover:underline hover:underline-offset-4"
          href="#home"
        >
          Products
        </a>
      </h2>

      <CategoryItems />
      <TopPicksItems />

      <SingleProduct
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </section>
  );
};

export default Products;
