import { Link } from "react-router-dom";

const SignInAndService = () => {
  return (
    <>
      {/* Sign In page Link */}
      <p className="text-sm mb-5 border-t-2 pt-3">
        Already have an account?{" "}
        <Link
          className="text-blue-500 hover:underline hover:text-red-500 font-medium"
          to={"/login"}
        >
          Sign in
        </Link>
      </p>

      {/* Terms & Conditions */}
      <p className="text-sm">
        By creating an account or logging in, you agree to Amazon's{" "}
        <span className="text-blue-500 underline hover:text-red-500 font-medium">
          Conditions of Use
        </span>{" "}
        and{" "}
        <span className="text-blue-500 underline hover:text-red-500 font-medium">
          Privacy Notice
        </span>
        .
      </p>
    </>
  );
};

export default SignInAndService;
