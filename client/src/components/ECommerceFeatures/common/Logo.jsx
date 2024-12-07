import { Link } from "react-router-dom";
import infinity from "../../../assets//infinity-white.png";

const Logo = () => {
  return (
    <>
      <Link
        to={"/"}
        className="flex items-center" >
        <img className="w-8 h-8 inline-block" src={infinity} alt="Mu2 Logo" />
        <h1 className="text-2xl text-white font-medium italic">
          finity<span className="text-sm">.in</span>
        </h1>
      </Link>
    </>
  );
};

export default Logo;