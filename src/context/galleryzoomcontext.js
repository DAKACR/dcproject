import { createContext, useContext } from "react";

const GalleryZoomContext = createContext();

export const useGalleryZoomContext = () => useContext(GalleryZoomContext)

export const GalleryZoomContextProvider = GalleryZoomContext.Provider;
