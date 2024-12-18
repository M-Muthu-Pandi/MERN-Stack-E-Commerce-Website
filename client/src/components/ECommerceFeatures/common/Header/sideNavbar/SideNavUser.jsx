import { signOut } from "firebase/auth";
import { auth } from "../../../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import defaultProfile from "../../../../../assets/profile-user.png";

const SidenavUserBtn = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(defaultProfile);
  const [log, setLog] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    if (location.state?.userName) {
      setUserName(location.state.userName);
    } else {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUserName(user.displayName || "User");
          setProfilePic(user.photoURL || defaultProfile);
          setLog(true);
        } else {
          setLog(false);
        }
      });

      return () => unsubscribe();
    }
  }, [location.state]);

  // Sign out the user
  const logoutUser = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center sm:hidden text-white font-medium pt-5 border-b border-b-gray-500 pb-2">
      {log ? (
        <>
          {/* Display user information if logged in */}
          <div className="flex flex-col items-center gap-2 pb-1">
            <img
              className="w-20 rounded-full ring ring-white"
              src={profilePic}
              alt="Profile Logo"
            />
            <span className="text-lg font-medium">Hello, {userName}</span>
          </div>
          <button
            onClick={logoutUser}
            className="pb-1 font-bold text-orange-300 hover:text-orange-400"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          {/* Display a generic user profile when logged out */}
          <div className="flex flex-col gap-2 pb-1 items-center">
            <img className="w-20" src={defaultProfile} alt="Profile Logo" />
            <span className="text-lg font-medium">Hello, User</span>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="pb-1 font-bold text-orange-300 hover:text-orange-400"
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
};

export default SidenavUserBtn;
