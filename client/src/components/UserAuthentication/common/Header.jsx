import { Link } from "react-router-dom";
import infinity from "../../../assets/infinity-black.png";

const Header = () => {
  return (
    <Link to={"/"}>
      <header className="flex items-center p-2">
        <img
          className="w-8 h-8 inline-block"
          src={infinity}
          alt="Infinity Logo"
        />
        <h1 className="text-2xl text-black font-medium italic">
          finity<span className="text-sm">.in</span>
        </h1>
      </header>
    </Link>
  );
};

export default Header;
