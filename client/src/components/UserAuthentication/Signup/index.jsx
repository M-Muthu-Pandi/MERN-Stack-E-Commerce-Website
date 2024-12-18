import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SignInGoogle from "../common/SignInWithGoogle";
import CreateAccount from "./createAccount";
import SignInAndService from "./ServiceAndSignIn";

const Signup = () => {
  // Scroll to top when component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col items-center gap-5">
      <Header />

      <section className="border-2 border-[#dddddd] rounded-lg w-80 sm:w-96 py-5 px-7 flex flex-col">
        <CreateAccount /> {/* Create account form */}
        <SignInAndService /> {/* Sign-in and service links */}
        <SignInGoogle /> {/* Google sign-in option */}
      </section>

      <Footer />
    </main>
  );
};

export default Signup;
