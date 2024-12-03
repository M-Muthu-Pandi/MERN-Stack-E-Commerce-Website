import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useState } from "react";
import google from "../../assets/Google-logo.png";

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <main className="flex flex-col items-center gap-5">
            <Header />
            <section className="border-2 border-[#dddddd] rounded-lg w-80 sm:w-96 py-5 px-7 flex flex-col">
                <h1 className="text-3xl font-medium mb-3">Sign in</h1>

                {/* User id */}
                <label htmlFor="email" className="font-semibold mb-1">Infinity Email</label>
                <input className="mb-3 p-1 border border-gray-400 rounded-md focus:outline-emerald-400 focus:bg-emerald-50" type="text" id="email" />

                {/* Password */}
                <label htmlFor="pass" className="font-semibold mb-1">Password</label>
                <input className="mb-3 p-1 border border-gray-400 rounded-md focus:outline-emerald-400 focus:bg-emerald-50" type="password" id="pass" />

                <button className="mb-5 bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500">Login</button>

                <p className="text-sm mb-5">By continuing, you agree to Amazon's <span className="text-blue-500 underline hover:text-red-500 font-medium">Conditions of Use</span> and <span className="text-blue-500 underline hover:text-red-500 font-medium">Privacy Notice</span>.</p>

                <div className="text-sm">
                    <p className="text-blue-500 hover:underline hover:text-red-500 font-medium cursor-pointer" onClick={() => setIsVisible(!isVisible)}>Need help?</p>
                    <ul className={`mt-1 flex-col gap-1 ${isVisible ? 'flex' : 'hidden'}`}>
                        <li className="text-blue-500 hover:underline hover:text-red-500 font-medium cursor-pointer">Forgot Password</li>
                        <li className="text-blue-500 hover:underline hover:text-red-500 font-medium cursor-pointer">Other issues with Sign-In</li>
                    </ul>
                </div>

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

            <section className="flex flex-col gap-3 w-96 px-7">
                <div className="flex items-center justify-center my-2">
                    <div className="flex-1 h-px bg-gray-400 mr-2.5"></div>
                    <p className="text-gray-500 text-sm">New to Infinity?</p>
                    <div className="flex-1 h-px bg-gray-400 ml-2.5"></div>
                </div>
                <button className="mb-2 rounded-md p-2 text-sm bg-gray-100 hover:bg-gray-200 border border-gray-400">
                    <Link to={'/signup'}>Create your Infinity account</Link>
                </button>
            </section>

            <Footer />
        </main>
    );
}

export default Login;
