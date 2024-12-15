import { useNavigate } from "react-router-dom";
import infinity from "../../../assets/infinity-black.png";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <header onClick={handleClick} className="flex items-center p-2 cursor-pointer">
      <img
        className="w-8 h-8 inline-block"
        src={infinity}
        alt="Infinity Logo"
      />
      <h1 className="text-2xl text-black font-medium italic">
        finity<span className="text-sm">.in</span>
      </h1>
    </header>
  );
};

export default Header;
