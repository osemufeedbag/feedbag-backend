import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const navValues = { showNav, setShowNav };

  return (
    <NavContext.Provider value={navValues}>{children}</NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
