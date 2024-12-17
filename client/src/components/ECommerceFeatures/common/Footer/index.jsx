import Logo from "../Others/Logo";
import Mu2 from "../../../../assets/Mu2-dark.png";
import FooterContent from "./footer";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="bg-gray-800 py-3 text-center hover:bg-gray-700">
        <a className="hover:text-orange-300" href="#home">Back to Top</a>
      </div>

      <FooterContent />

      <div className="bg-gray-950 flex justify-between px-10 py-5">
        <Logo />
        <div className="flex items-center">
          <img
            className="w-8 border border-white cursor-pointer hover:opacity-80"
            src={Mu2}
            alt="Mu2 Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
