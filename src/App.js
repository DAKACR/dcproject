import ContextProviders from "context/ContextProviders";

import HeaderSection from "sections/HeaderSection";
import HomeSection from "sections/HomeSection";
import ServicesSection from "sections/ServicesSection";
import AboutUsSection from "sections/AboutUsSection";
import MostUsedPrograms from "sections/MostUsedPrograms";
import GallerySection from "sections/GallerySection";
import ContactSection from "sections/ContactSection";
import FooterSection from "sections/FooterSection";

import IconsSetup from "components/IconsSetup";

export default function App() {
  return (
    <ContextProviders>
      <IconsSetup />
      <HeaderSection />
      <HomeSection />
      <ServicesSection />
      <AboutUsSection />
      <MostUsedPrograms />
      <GallerySection />
      <ContactSection />
      <FooterSection />
    </ContextProviders>
  );
}
