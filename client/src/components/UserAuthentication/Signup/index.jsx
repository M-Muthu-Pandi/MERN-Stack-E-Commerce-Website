import Header from "../common/Header";
import Footer from "../common/Footer";
import SignInGoogle from "../common/SignInWithGoogle";
import CreateAccount from "./createAccount";
import SignInAndService from "./ServiceAndSignIn";

const Signup = () => {
  return (
    <main className="flex flex-col items-center gap-5">
      <Header />

      <section className="border-2 border-[#dddddd] rounded-lg w-80 sm:w-96 py-5 px-7 flex flex-col">
        <CreateAccount />

        <SignInAndService />

        <SignInGoogle />
      </section>

      <Footer />
    </main>
  );
};

export default Signup;
