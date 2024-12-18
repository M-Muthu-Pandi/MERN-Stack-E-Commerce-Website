import { useEffect } from "react";
import { useAdmin } from "../../ECommerceFeatures/common/Context/AdminContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../ECommerceFeatures/common/Footer";
import Header from "../../ECommerceFeatures/common/Header";
import CatProductUpload from "./CategoriesProductUpload";
import TopProductUpload from "./TopPicksProductUpload";

const ProductUpload = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const admin = useAdmin(); // Get the admin status from context
  const navigate = useNavigate();

  // Handle navigation and page reload
  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {admin ? (
        <>
          <Header />
          <main className="flex flex-col gap-5 items-center p-3 sm:p-5">
            <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium">
              ADD PRODUCTS
            </h1>

            {/* Product upload components for categories and top picks */}
            <CatProductUpload />
            <TopProductUpload />

            {/* Button to navigate to another admin page */}
            <button
              onClick={() => navigate("/adminaccess/others")}
              className="bg-orange-400 rounded-3xl p-2 text-sm hover:bg-orange-500 w-3/4"
            >
              Add Others Page
            </button>
          </main>
          <Footer />
        </>
      ) : (
        // Display if the user is not an admin
        <div className="flex flex-col gap-5 items-center mt-5">
          <p className="md:text-lg">
            We're sorry, but this page is not available for user access.
          </p>
          {/* Button to go back to the home page */}
          <button
            onClick={handleClick}
            className="font-medium bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500"
          >
            Go to Home
          </button>
        </div>
      )}
    </>
  );
};

export default ProductUpload;
