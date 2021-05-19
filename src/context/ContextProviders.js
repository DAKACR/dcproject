import { useState } from "react";

import { CloudinaryContext } from "cloudinary-react";

import { LandingTextProvider } from "./landingtextcontext";
import { LanguageProvider } from "./languagecontext";
import { ExpandedGalleryImgProvider } from "./expandedgalleryimgcontext";

import useContentful from "hooks/useContentful";

const ContextProviders = ({ children }) => {
  const [lang, setLang] = useState("es");
  const [expandedGalleryImg, setExpandedGalleryImg] = useState(false);

  const { text } = useContentful();

  return (
    <LanguageProvider
      value={{
        lang,
        setLang,
      }}
    >
      <ExpandedGalleryImgProvider
        value={{
          expandedGalleryImg,
          setExpandedGalleryImg,
        }}
      >
        <LandingTextProvider value={text}>
          <CloudinaryContext cloudName="deudpvv78">
            {children}
          </CloudinaryContext>
        </LandingTextProvider>
      </ExpandedGalleryImgProvider>
    </LanguageProvider>
  );
};

export default ContextProviders;
