import { useState, useEffect } from "react";
import axios from "axios";
import rightArrow from "../../../assets/right-arrow.png";
import leftArrow from "../../../assets/left-arrow.png";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index
  const [images, setImages] = useState([]); // Store carousel images

  // Fetch images from the API
  useEffect(() => {
    axios
      .get("https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/slider")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  // Handle previous slide navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle next slide navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <section className="relative w-full mx-auto overflow-hidden">
      <div
        className="bg-gray-100 flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={image._id}
            src={image.image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 px-2 sm:px-3 py-5 sm:py-10 border-2 border-transparent hover:border-gray-800 hover:ring-2 ring-white"
      >
        <img className="w-5 md:w-8 lg:w-10" src={leftArrow} alt="Left Arrow" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 px-2 sm:px-3 py-5 sm:py-10 border-2 border-transparent hover:border-gray-800 hover:ring-2 ring-white"
      >
        <img className="w-5 md:w-8 lg:w-10" src={rightArrow} alt="Left Arrow" />
      </button>
    </section>
  );
};

export default ImageCarousel;
