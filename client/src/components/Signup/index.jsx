import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import google from "../../assets/Google-logo.png";

const Signup = () => {
    return (
        <main className="flex flex-col items-center gap-5">
            <Header />
            <section className="border-2 border-[#dddddd] rounded-lg w-80 sm:w-96 py-5 px-7 flex flex-col">
                <h1 className="text-3xl font-medium mb-3">Create Account</h1>

                {/* Name */}
                <label htmlFor="name" className="font-semibold mb-1">Your name</label>
                <input className="mb-3 p-1 border border-gray-400 rounded-md focus:outline-emerald-400 focus:bg-emerald-50" type="text" id="name" placeholder="First and last name" />

                {/* Mobile Number */}
                <label htmlFor="mobile" className="font-semibold mb-1">Infinty Email</label>
                <input className="mb-3 p-1 border border-gray-400 rounded-md focus:outline-emerald-400 focus:bg-emerald-50" type="text" id="mobile" placeholder="abc@infinity.com" />

                {/* Password */}
                <label htmlFor="password" className="font-semibold mb-1">Password</label>
                <input className="mb-5 p-1 border border-gray-400 rounded-md focus:outline-emerald-400 focus:bg-emerald-50" type="text" id="password" placeholder="At least 6 characters" />

                {/* <p className="text-sm mb-3">To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p> */}

                <button className="mb-5 bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500">Sign Up</button>

                <p className="text-sm mb-5 border-t-2 pt-3">Already have an account? <Link className="text-blue-500 hover:underline hover:text-red-500 font-medium" to={'/login'}>Sign in</Link></p>

                <p className="text-sm">By creating an account or logging in, you agree to Amazon's <span className="text-blue-500 underline hover:text-red-500 font-medium">Conditions of Use</span> and <span className="text-blue-500 underline hover:text-red-500 font-medium">Privacy Notice</span>.</p>

                <div className="flex items-center justify-center my-5">
                    <div className="flex-1 h-px bg-gray-400 mr-2.5"></div>
                    <p className="text-gray-500 text-sm">Or</p>
                    <div className="flex-1 h-px bg-gray-400 ml-2.5"></div>
                </div>

                <button className="bg-blue-600 rounded-md p-1 text-sm text-white hover:bg-blue-700 flex justify-between items-center gap-2 font-medium">
                    <img className="w-7 bg-white rounded-full p-1" src={google} alt="Google Logo" />
                    <span className="mr-16 sm:mr-24">Sign In with Google</span>
                </button>
            </section>

            <Footer />
        </main>
    );
}

export default Signup;
