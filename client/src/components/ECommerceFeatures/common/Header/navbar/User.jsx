import { signOut } from "firebase/auth";
import { auth } from "../../../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserBtn = () => {
  const location = useLocation();
  const [userName, setUserName] = useState(""); // State for the user's name
  const [log, setLog] = useState(false); // State for login status
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    if (location.state?.userName) {
      setUserName(location.state.userName);
    } else {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUserName(user.displayName || "User");
          setLog(true);
        } else {
          setLog(false);
        }
      });

      return () => unsubscribe();
    }
  }, [location.state]);

  // Log out the user
  const logoutUser = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="hidden sm:inline-block text-white text-sm font-medium border border-gray-900 p-1 hover:border-white">
      {log ? (
        <>
          <span className="text-xs">Hello, {userName}</span>
          <button
            className="flex flex-col font-bold text-orange-300 hover:text-orange-400"
            onClick={logoutUser}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <span className="text-xs">Hello, User</span>
          <button
            className="flex flex-col font-bold text-orange-300 hover:text-orange-400"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
};

export default UserBtn;
