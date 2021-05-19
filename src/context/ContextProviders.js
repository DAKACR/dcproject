import { useState } from "react";

import { LandingDataProvider } from "./landingdatacontext";
import { LanguageProvider } from "./languagecontext";
import { GalleryZoomContextProvider } from "./galleryzoomcontext";

import useContentful from "hooks/useContentful";

const ContextProviders = ({ children }) => {
  const [lang, setLang] = useState("es");
  const [galleryZoom, setGalleryZoom] = useState(false);

  const landingData = useContentful();

  return (
    <LandingDataProvider value={landingData.data}>
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
    </LandingDataProvider>
  );
};

export default ContextProviders;
