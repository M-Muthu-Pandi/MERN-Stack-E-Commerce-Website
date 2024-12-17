import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SignUpBtn from "../common/signUpButton";
import Fpassword from "./forgotPass";

const ForgotPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col items-center gap-5">
      <Header />

      <section className="border-2 border-[#dddddd] rounded-lg w-80 sm:w-96 py-5 px-7 flex flex-col">
        <Fpassword />
      </section>

      <SignUpBtn
        data={"Know your Password ?"}
        button={"Go to Login"}
        link={"/login"}
      />

      <Footer />
    </main>
  );
};

export default ForgotPassword;
