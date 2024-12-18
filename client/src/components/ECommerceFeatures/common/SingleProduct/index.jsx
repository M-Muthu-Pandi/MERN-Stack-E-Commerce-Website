import { useNavigate } from "react-router-dom";
import axios from "axios";

const SingleProduct = ({ selectedProduct, setSelectedProduct }) => {
  const navigate = useNavigate();

  // Sends a POST request to the server with product details
  const handleAddToCart = async (e) => {
    const cartData = {
      image: selectedProduct.image,
      title: selectedProduct.title,
      subtitle: selectedProduct.subtitle,
      price: parseFloat(selectedProduct.price),
      noOfItems: 1,
    };

    try {
      const response = await axios.post(
        "https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/cartandplaceorder",
        cartData
      );
      console.log(response.data);
      navigate("/cart");
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message); // Show the "already in cart" message
      } else {
        alert("Failed to add to cart. Check the console for details.");
        console.error(error);
      }
    }
  };

  return (
    <>
      {selectedProduct && (
        <div className="fixed z-40 top-12 sm:top-16 left-0 h-screen w-full bg-gray-200 p-5 sm:p-10">
          <div className="bg-white p-5 sm:p-10 flex flex-col items-center sm:items-start sm:flex-row sm:justify-around rounded-lg relative">
            {/* Close button to deselect the product */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 border-2 border-red-600 hover:bg-red-600 hover:text-white rounded sm:rounded-md px-1 sm:py-1 sm:px-2 text-sm sm:text-base"
            >
              ✕
            </button>
            <img
              className="mt-5 sm:m-0 h-48 sm:h-64 md:h-80 lg:h-96"
              src={selectedProduct.image}
              alt={selectedProduct.subtitle}
            />
            <div className="sm:w-1/2 flex flex-col gap-1 md:gap-3">
              <p className="my-2 sm:text-lg md:text-xl lg:text-2xl">
                {selectedProduct.title}
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="w-20 sm:w-24 lg:w-28"
                  src={selectedProduct.rating}
                  alt="Rating"
                />
                <p className="text-sm sm:text-base lg:text-xl">
                  {selectedProduct.review} Reviews
                </p>
              </div>
              <p className="font-medium md:text-xl mt-1">
                ₹.{selectedProduct.price}
              </p>
              <button
                onClick={handleAddToCart}
                className="self-center sm:self-start bg-yellow-400 rounded-3xl p-1 md:p-2 hover:bg-yellow-500 w-1/2 mt-3 md:mt-5 text-sm md:text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
