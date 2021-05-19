import { useState } from "react";

import { CloudinaryContext } from "cloudinary-react";

import { LanguageProvider } from "context/languagecontext";
import { ExpandedGalleryImgProvider } from "context/expandedgalleryimgcontext";

import HeaderSection from "sections/HeaderSection";
import HomeSection from "sections/HomeSection";
import ServicesSection from "sections/ServicesSection";
import AboutUsSection from "sections/AboutUsSection";
import MostUsedPrograms from "sections/MostUsedPrograms";
import GallerySection from "sections/GallerySection";
import ContactSection from "sections/ContactSection";
import FooterSection from "sections/FooterSection";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faMap,
  faPhone,
  faMailBulk,
  faClock,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

library.add(faWhatsapp, faMap, faPhone, faMailBulk, faClock, faCalendar);

export default function App() {
  const [lang, setLang] = useState("es");
  const [expandedGalleryImg, setExpandedGalleryImg] = useState(false);

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
        <CloudinaryContext cloudName="deudpvv78">
          <HeaderSection />
          <HomeSection />
          <ServicesSection />
          <AboutUsSection />
          <MostUsedPrograms />
          <GallerySection />
          <ContactSection />
          <FooterSection />
        </CloudinaryContext>
      </ExpandedGalleryImgProvider>
    </LanguageProvider>
  );
}
