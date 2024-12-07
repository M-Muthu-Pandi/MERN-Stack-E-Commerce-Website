import { signOut } from "firebase/auth";
import { auth } from "../../../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import profile from "../../../../../assets/profile-user.png";

const SidenavUserBtn = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [log, setLog] = useState(false);
  const navigate = useNavigate();

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

  const logoutUser = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center sm:hidden text-white font-medium pt-5 border-b border-b-gray-500 pb-2">
      {log ? (
        <>
          <div className="flex items-center gap-2 pb-1">
            <img className="w-6" src={profile} alt="Profile Logo" />
            <span className="text-xl">Hello, {userName}</span>
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
          <div className="flex gap-2 pb-1 items-center">
            <img className="w-6" src={profile} alt="Profile Logo" />
            <span className="text-xl">Hello, User</span>
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
