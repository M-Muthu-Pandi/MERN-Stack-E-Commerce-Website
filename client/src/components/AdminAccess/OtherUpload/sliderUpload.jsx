import { useState } from "react";
import axios from "axios";

const SliderUpload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [src, setSrc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sliderData = {
      image: src,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/slider",
        sliderData
      );
      alert("Slider added successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Failed to add Slider. Check the console for details.");
      console.error(error);
    }
  };

  return (
    <div className="bg-white pt-3 px-3 sm:px-5 rounded-lg">
      <h3
        onClick={() => setIsVisible((prev) => !prev)}
        className="text-center text-sm md:text-base lg:text-lg text-gray-500 hover:text-blue-500 cursor-pointer font-medium pb-2 border-b border-b-gray-300"
      >
        SLIDES
      </h3>
      {isVisible && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-5">
          <input
            value={src}
            onChange={(e) => setSrc(e.target.value)}
            className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
            type="text"
            placeholder="Category Image URL"
            required
          />

          <button
            type="submit"
            className="bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500"
          >
            Add Slide
          </button>
        </form>
      )}
    </div>
  );
};

export default SliderUpload;