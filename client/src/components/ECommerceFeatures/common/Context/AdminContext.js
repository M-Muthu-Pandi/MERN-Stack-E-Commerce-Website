import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../../../config/firebase";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.uid === "A8MqFZgXlVg7anmkFsHvzED9yd82") {
          console.log("He is Admin");
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      } else {
        console.log("User logged Out");
      }
    });
  }, []);

  return (
    <AdminContext.Provider value={admin}>{children}</AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
