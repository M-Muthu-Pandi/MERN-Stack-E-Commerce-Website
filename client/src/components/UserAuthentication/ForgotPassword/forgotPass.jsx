import { useState } from "react";
import { auth } from "../../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Fpassword = () => {
  const [email, setEmail] = useState(""); // Email input state
  const [message, setMessage] = useState(""); // Message state to show success/error message

  // Handle password reset request
  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage(
        "Failed to send password reset email. Please check the email address."
      );
    }
  };

  return (
    <form onSubmit={handleForgotPassword} className="flex flex-col">
      <h1 className="text-3xl font-medium mb-3"> Reset Password </h1>

      {/* Email Input */}
      <label htmlFor="email" className="font-semibold mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        required
      />

      {/* Reset Password Button */}
      <button
        type="submit"
        className="bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500"
      >
        Send Reset Email
      </button>

      {/* Message display */}
      <p className="text-sm text-green-600 mt-3"> {message} </p>
    </form>
  );
};

export default Fpassword;
