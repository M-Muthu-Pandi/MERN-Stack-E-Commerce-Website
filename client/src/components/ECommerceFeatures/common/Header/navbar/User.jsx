import { signOut } from "firebase/auth";
import { auth } from "../../../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserBtn = () => {
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
    <div className="hidden sm:inline-block text-white text-sm font-medium border border-gray-900 p-1 hover:border-white">
      {log ? (
        <button className="flex flex-col" onClick={logoutUser}>
          <span className="text-xs">Hello, {userName}</span>
          <span className="font-bold text-orange-300 hover:text-orange-400">
            Sign Out
          </span>
        </button>
      ) : (
        <>
          <button className="flex flex-col" onClick={() => navigate("/login")}>
            <span className="text-xs">Hello, User</span>
            <span className="font-bold text-orange-300 hover:text-orange-400">
              Sign In
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default UserBtn;
