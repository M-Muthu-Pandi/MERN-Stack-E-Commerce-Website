import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SignInGoogle from "../common/SignInWithGoogle";
import SignUpBtn from "../common/signUpAndLoginButton";
import HelpAndService from "./helpAndService";
import SignIn from "./signin";

const Login = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col items-center gap-5 w-full">
      <Header />

      <section className="border-2 border-[#dddddd] rounded-lg w-80 sm:w-96 py-5 px-7 flex flex-col">
        <SignIn /> {/* Sign-In form */}
        <HelpAndService /> {/* Help and Service section */}
        <SignInGoogle /> {/* Google Sign-In option */}
      </section>

      <SignUpBtn
        data={"New to Infinity?"}
        button={"Create your Infinity account"}
        link={"/signup"} // Link to sign-up page
      />

      <Footer />
    </main>
  );
};

export default Login;
