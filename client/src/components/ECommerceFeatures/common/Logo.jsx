import { Link } from "react-router-dom";
import infinity from "../../../assets//infinity-white.png";

const Logo = () => {
  return (
    <>
      <Link
        to={"/"}
        className="flex items-center" >
        <img className="w-6 h-6 sm:w-8 sm:h-8 inline-block" src={infinity} alt="Mu2 Logo" />
        <h1 className="text-xl sm:text-2xl text-white font-medium italic">
          finity<span className="text-sm">.in</span>
        </h1>
      </Link>
    </>
  );
};

export default Logo;
