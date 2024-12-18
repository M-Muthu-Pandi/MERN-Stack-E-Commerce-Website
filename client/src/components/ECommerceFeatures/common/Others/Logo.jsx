import { useNavigate } from "react-router-dom";
import infinity from "../../../../assets//infinity-white.png";

const Logo = () => {
  const navigate = useNavigate();

  // Handles click event to navigate to the home page and reload the page.
  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div onClick={handleClick} className="flex items-center cursor-pointer">
        {/* Logo */}
        <img
          className="w-6 h-6 sm:w-8 sm:h-8 inline-block"
          src={infinity}
          alt="Mu2 Logo"
        />
        <h1 className="text-xl sm:text-2xl text-white font-medium italic">
          finity<span className="text-sm">.in</span>
        </h1>
      </div>
    </>
  );
};

export default Logo;
