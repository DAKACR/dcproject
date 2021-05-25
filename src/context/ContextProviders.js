import { useState } from "react";

import { LanguageProvider } from "./languagecontext";
import { GalleryZoomContextProvider } from "./galleryzoomcontext";

const ContextProviders = ({ children }) => {
  const [lang, setLang] = useState("es");
  const [galleryZoom, setGalleryZoom] = useState(false);

  return (
    <LanguageProvider
      value={{
        lang,
        setLang,
      }}
    >
      <GalleryZoomContextProvider
        value={{
          galleryZoom,
          setGalleryZoom,
        }}
      >
        {children}
      </GalleryZoomContextProvider>
    </LanguageProvider>
  );
};

export default ContextProviders;
