import { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [user, setUser] = useState(""); // Email state
  const [pass, setPass] = useState(""); // Password state
  const [err, setErr] = useState(""); // Error message state
  const navigate = useNavigate();

  // Redirect to home if the user is already logged in
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
  }, [navigate]);

  // Sign-in function
  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, user, pass)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setErr("Sign-in failed. Please try again.");
      });
  };

  return (
    <form onSubmit={loginUser} className="flex flex-col">
      <h1 className="text-3xl font-medium mb-3">Sign in</h1>

      {/* Email input */}
      <label htmlFor="user" className="font-semibold mb-1">
        Email
      </label>
      <input
        onChange={(e) => setUser(e.target.value)}
        className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="email"
        id="user"
        placeholder="abc@gmail.com"
        required
      />

      {/* Password input */}
      <label htmlFor="pass" className="font-semibold mb-1">
        Password
      </label>
      <input
        onChange={(e) => setPass(e.target.value)}
        className="mb-6 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="password"
        id="pass"
        placeholder="At least 6 characters"
        required
      />

      {/* Login button */}
      <button
        type="submit"
        className="bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500"
      >
        Login
      </button>
      <p className="text-red-600 text-sm cursor-pointer my-2 mb-3">{err}</p>
    </form>
  );
};

export default SignIn;
