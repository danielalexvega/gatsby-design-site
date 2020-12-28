import React, { useState, createContext } from "react";
import sublinks from "../constants/links";

const GatsbyContext = createContext();

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [links, setLinks] = useState(sublinks);



  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, links }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }