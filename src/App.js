import React, { useState, useRef } from "react";

import { CloudinaryContext } from 'cloudinary-react';

import { LanguageProvider } from "context/languagecontext";
import { SectionsProvider } from "context/sectionscontext";
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

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const mostUsedProgramsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <LanguageProvider
      value={{
        lang,
        setLang,
      }}
    >
      <SectionsProvider
        value={{
          homeRef,
          servicesRef,
          aboutUsRef,
          mostUsedProgramsRef,
          galleryRef,
          contactRef,
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
            <HomeSection getRef={homeRef} />
            <ServicesSection getRef={servicesRef} />
            <AboutUsSection getRef={aboutUsRef} />
            <MostUsedPrograms getRef={mostUsedProgramsRef} />
            <GallerySection getRef={galleryRef} />
            <ContactSection getRef={contactRef} />
            <FooterSection />
          </CloudinaryContext>
        </ExpandedGalleryImgProvider>
      </SectionsProvider>
    </LanguageProvider>
  );
}
