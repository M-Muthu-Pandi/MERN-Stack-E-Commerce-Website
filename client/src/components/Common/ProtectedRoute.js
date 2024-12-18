import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // Check authentication status when the component is mounted
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // If no user is authenticated, redirect to the login page
      if (!user) {
        navigate("/login");
      }
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, [navigate]);

  return children;
};

export default ProtectedRoute;
