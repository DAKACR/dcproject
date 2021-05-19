import { createContext, useContext } from "react";

const LandingDataContext = createContext();

export const useLandingDataContext = () => useContext(LandingDataContext);

export const LandingDataProvider = LandingDataContext.Provider;
