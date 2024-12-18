import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [uname, setUname] = useState(""); // State for username
  const [user, setUser] = useState(""); // State for email
  const [pass, setPass] = useState(""); // State for password
  const [confirmPass, setConfirmPass] = useState(""); // State for confirm password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  // Redirect to home if user is already logged in
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
  }, [navigate]);

  const signupUser = async (e) => {
    e.preventDefault();

    if (pass.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (pass !== confirmPass) {
      setError("The passwords entered do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user,
        pass
      );
      const registeredUser = userCredential.user;

      // Update profile with username
      await updateProfile(registeredUser, { displayName: uname });

      console.log("User Registered");
      navigate("/", { state: { userName: uname } });
    } catch (error) {
      // Handle specific errors like email already in us
      if (error.code === "auth/email-already-in-use") {
        setError(
          "This email is already registered. Please log in or use a different email."
        );
      } else {
        setError("Failed to create account. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={signupUser} className="flex flex-col">
      <h1 className="text-3xl font-medium mb-3">Create Account</h1>

      {/* Name input */}
      <label htmlFor="name" className="font-semibold mb-1">
        Your name
      </label>
      <input
        value={uname}
        onChange={(e) => setUname(e.target.value)}
        className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="text"
        id="name"
        placeholder="First and last name"
        required
      />

      {/* Email input */}
      <label htmlFor="user" className="font-semibold mb-1">
        Email
      </label>
      <input
        onChange={(e) => setUser(e.target.value)}
        className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="email"
        id="user"
        placeholder="abc@gmail.com."
        required
      />

      {/* Password input */}
      <label htmlFor="password" className="font-semibold mb-1">
        Password
      </label>
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="password"
        id="password"
        placeholder="At least 6 characters"
        required
      />

      {/* Confirm Password input */}
      <label htmlFor="confpassword" className="font-semibold mb-1">
        Confirm Password
      </label>
      <input
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
        className="mb-5 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="password"
        id="confpassword"
        placeholder="At least 6 characters"
        required
      />

      {/* SignUp button */}
      <button
        type="submit"
        className="bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500"
      >
        Sign Up
      </button>
      {error && (
        <p className="text-red-500 font-medium text-xs mt-2">{error}</p>
      )}
      <p className="mb-5"></p>
    </form>
  );
};

export default CreateAccount;
