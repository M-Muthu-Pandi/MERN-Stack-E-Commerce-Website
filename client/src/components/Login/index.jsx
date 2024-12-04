import Header from "../common/Header";
import Footer from "../common/Footer";
import SignInGoogle from "../common/SignInWithGoogle";
import SignUpBtn from "../common/signUpButton";
import HelpAndService from "./helpAndService";
import SignIn from "./signin";

const Login = () => {
    return (
        <main className="flex flex-col items-center gap-5">
            <Header />

            <section className="border-2 border-[#dddddd] rounded-lg w-80 sm:w-96 py-5 px-7 flex flex-col">
                <SignIn />

                <HelpAndService />

                <SignInGoogle />
            </section>

            <SignUpBtn data={'New to Infinity?'} button={'Create your Infinity account'} link={'/signup'} />

            <Footer />
        </main>
    );
}

export default Login;
