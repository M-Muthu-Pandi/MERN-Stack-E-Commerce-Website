import { Link } from "react-router-dom";
import { useRef } from "react";
import infinity from "../../../../../assets/infinity-white.png";
import search from "../../../../../assets/search.png";

const LogoAndSearch = () => {
  const containerRef = useRef(null);

  const handleFocus = () => {
    containerRef.current.classList.add("ring-2", "ring-orange-300");
  };

  const handleBlur = () => {
    containerRef.current.classList.remove("ring-2", "ring-orange-300");
  };

  return (
    <>
      <Link to={"/"} className="flex items-center">
        <img className="w-8 h-8 inline-block" src={infinity} alt="Mu2 Logo" />
        <h1 className="text-2xl text-white font-medium italic">
          finity<span className="text-sm">.in</span>
        </h1>
      </Link>

      <form
        ref={containerRef}
        className="flex mx-10 w-1/2 rounded-sm m-1"
        tabIndex="0"
      >
        <input
          className="flex-grow basis-full border-none rounded-l-sm focus:outline-none text-sm px-3 py-2"
          type="text"
          placeholder="Search for products, brands and more..."
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button
          className="py-2 px-3 rounded-r-sm bg-orange-300 hover:bg-orange-400"
          type="submit"
        >
          <img className="w-5" src={search} alt="Search icon" />
        </button>
      </form>
    </>
  );
};

export default LogoAndSearch;
