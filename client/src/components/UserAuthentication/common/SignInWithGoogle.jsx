import google from "../../../assets/Google-logo.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../config/firebase";

const SignInGoogle = () => {
  // Handle Google sign-in process
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user.displayName);
    } catch (err) {
      console.log(`Error while signing in... ${err.message}`);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center my-5">
        <div className="flex-1 h-px bg-gray-400 mr-2.5"></div>
        <p className="text-gray-500 text-sm">Or</p>
        <div className="flex-1 h-px bg-gray-400 ml-2.5"></div>
      </div>

      {/* Google SignIn */}
      <button
        onClick={handleSignIn}
        className="bg-blue-600 rounded-md p-1 text-sm text-white hover:bg-blue-700 flex justify-between items-center gap-2 font-medium"
      >
        <img
          className="w-7 bg-white rounded-full p-1"
          src={google}
          alt="Google Logo"
        />
        <span className="mr-16 sm:mr-24">Sign In with Google</span>
      </button>
    </>
  );
};

export default SignInGoogle;
