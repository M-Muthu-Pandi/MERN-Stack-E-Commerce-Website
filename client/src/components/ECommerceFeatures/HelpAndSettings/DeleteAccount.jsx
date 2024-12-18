import {
  getAuth,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
  onAuthStateChanged,
  GoogleAuthProvider,
  reauthenticateWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DeleteAccountButton = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  // Set the current user state when authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  // Handle account deletion
  const handleDeleteAccount = async () => {
    if (!user) {
      alert("Please log in to delete your account.");
      navigate("/login");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      // Reauthenticate based on provider type (password or Google)
      if (user.providerData[0]?.providerId === "password") {
        // For email/password accounts
        if (!password) {
          alert("Please enter your password to confirm.");
          return;
        }

        const credential = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, credential);
      } else if (user.providerData[0]?.providerId === "google.com") {
        // For Google accounts
        const provider = new GoogleAuthProvider();
        await reauthenticateWithPopup(auth.currentUser, provider);
      }

      // Delete user account
      await deleteUser(user);
      console.log("User account deleted successfully.");
      alert("Your account has been deleted.");
      navigate("/");
    } catch (error) {
      console.error("Error deleting user account:", error);

      // Handle specific error cases
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else if (error.code === "auth/requires-recent-login") {
        alert("Please log in again to delete your account.");
      } else if (error.code === "auth/network-request-failed") {
        alert("Network error. Please check your connection and try again.");
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      {user &&
      user.providerData[0]?.providerId === "password" &&
      showPasswordInput ? (
        <div className="flex flex-col md:items-start gap-2">
          <label htmlFor="deleteacc" className="text-gray-700">
            Please enter your password to confirm:
          </label>
          <input
            id="deleteacc"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            onClick={handleDeleteAccount}
            className="bg-red-500 rounded-md py-2 px-3 text-sm text-white hover:bg-red-600"
          >
            Confirm and Delete Account
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:items-start">
          <button
            onClick={() =>
              user?.providerData[0]?.providerId === "password"
                ? setShowPasswordInput(true)
                : handleDeleteAccount()
            }
            className="bg-red-500 rounded-md p-2 text-sm text-white hover:bg-red-600"
          >
            Delete Account
          </button>
        </div>
      )}
    </>
  );
};

export default DeleteAccountButton;
