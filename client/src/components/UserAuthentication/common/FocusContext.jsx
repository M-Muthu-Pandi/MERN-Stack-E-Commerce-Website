import { createContext } from "react";

export const FocusContext = createContext();

const FocusProvider = ({ children }) => {
  return (
    <>
      <FocusContext.Provider value={{}}>{children}</FocusContext.Provider>
    </>
  );
};

export default FocusProvider;
