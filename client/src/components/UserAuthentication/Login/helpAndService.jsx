import { Link } from "react-router-dom";

const HelpAndService = () => {
  return (
    <>
      {/* Terms & Conditions */}
      <p className="text-sm mb-5">
        By continuing, you agree to Amazon's{" "}
        <span className="text-blue-500 underline hover:text-red-500 font-medium cursor-pointer">
          Conditions of Use
        </span>{" "}
        and{" "}
        <span className="text-blue-500 underline hover:text-red-500 font-medium cursor-pointer">
          Privacy Notice
        </span>
        .
      </p>

      {/* Forgot Password link */}
      <Link to={"/forgotpassword"} className="text-sm">
        <p className="text-blue-500 hover:underline hover:text-red-500 font-medium cursor-pointer">
          Forgot Password
        </p>
      </Link>
    </>
  );
};

export default HelpAndService;
