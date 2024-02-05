import React, { createContext, useContext, useState } from "react";

const NavContentContext = createContext();

// eslint-disable-next-line react/prop-types
export const NavContentProvider = ({ children }) => {
  const [navContent, setNavContent] = useState(null);

  return <NavContentContext.Provider value={{ navContent, setNavContent }}>{children}</NavContentContext.Provider>;
};

export const useNavContent = () => useContext(NavContentContext);
