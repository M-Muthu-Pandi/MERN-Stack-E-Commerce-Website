import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [uname, setUname] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleUname = (e) => {
    setUname(e.target.value);
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

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

      await updateProfile(registeredUser, { displayName: uname });

      console.log("User Registered");
      navigate("/", { state: { userName: uname } });
    } catch (error) {
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

      {/* Name */}
      <label htmlFor="name" className="font-semibold mb-1">
        Your name
      </label>
      <input
        value={uname}
        onChange={handleUname}
        className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="text"
        id="name"
        placeholder="First and last name"
        required
      />

      {/* Email */}
      <label htmlFor="user" className="font-semibold mb-1">
        Email
      </label>
      <input
        onChange={handleUser}
        className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="email"
        id="user"
        placeholder="abc@gmail.com."
        required
      />

      {/* Password */}
      <label htmlFor="password" className="font-semibold mb-1">
        Password
      </label>
      <input
        value={pass}
        onChange={handlePass}
        className="mb-3 p-1 border border-gray-400 rounded focus:ring-emerald-400 focus:ring-1 focus:outline-none focus:bg-emerald-50"
        type="password"
        id="password"
        placeholder="At least 6 characters"
        required
      />

      {/* Confirm Password */}
      <label htmlFor="confpassword" className="font-semibold mb-1">
        Confirm Password
      </label>
      <input
        value={confirmPass}
        onChange={handleConfirmPass}
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
