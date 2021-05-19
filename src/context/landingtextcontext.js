import { createContext, useContext } from "react";

const LandingTextContext = createContext();

export const useLandingTextContext = () => useContext(LandingTextContext);

export const LandingTextProvider = LandingTextContext.Provider;
