import React, { createContext, useRef } from "react";

const NavigationContext = createContext();

export const HomeProvider = ({ children }) => {
  const scrollRefs = {
    abtus: useRef(null),
    leadership: useRef(null),
    faq: useRef(null),
  };

  return <NavigationContext.Provider value={scrollRefs}>{children}</NavigationContext.Provider>;
};

export default NavigationContext;