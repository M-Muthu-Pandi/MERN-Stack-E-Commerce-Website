import { useState } from "react";
import axios from "axios";

const WatchProductUpload = () => {
  const [isVisible, setIsVisible] = useState(false);

  // State variables to manage form inputs
  const [product, setProduct] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("watch");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [price, setPrice] = useState("");

  // Handles form submission to add a new product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      image: product,
      title: desc,
      subtitle: title,
      rating: rating,
      review: parseInt(review, 10),
      price: parseFloat(price),
    };

    try {
      // Send POST request to add product to the backend
      const response = await axios.post(
        "https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/watches",
        productData
      );
      alert("Product added successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Failed to add product. Check the console for details.");
      console.error(error);
    }
  };

  return (
    <div className="bg-white pt-3 px-3 sm:px-5 rounded-lg">
      <h3
        onClick={() => setIsVisible((prev) => !prev)}
        className="text-center text-sm md:text-base lg:text-lg text-gray-500 hover:text-blue-500 cursor-pointer font-medium pb-2 border-b border-b-gray-300"
      >
        WATCHES
      </h3>
      {isVisible && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-5">
          {/* Input for Product Image URL */}
          <input
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
            type="text"
            placeholder="Product Image URL"
            required
          />
          {/* Textarea for Description */}
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
            name="description"
            placeholder="Description"
            required
          ></textarea>
          {/* Input for Title */}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
            type="text"
            placeholder="Title"
            required
          />
          {/* Input for Rating Image URL */}
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
            type="text"
            placeholder="Rating Image URL"
            required
          />
          {/* Input for Number of Reviews */}
          <input
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
            type="number"
            placeholder="Reviews"
            required
          />
          {/* Input for Price */}
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
            type="number"
            placeholder="Price (Numbers only)"
            required
          />

          {/* Button to submit the form */}
          <button
            type="submit"
            className="bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500"
          >
            Add Product
          </button>
        </form>
      )}
    </div>
  );
};

export default WatchProductUpload;
