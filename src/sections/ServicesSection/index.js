import { useContext } from "react";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import ServiceCard from "components/ServiceCard";

import { ServicesContainer } from "./styles";

import SERVICES_DATA from "./servicesdata";

export default function ServicesSection() {
  const { lang } = useContext(LanguageContext);

  return (
    <Layout id="services" section="services">
      <SectionTitle title={lang === "es" ? "servicios" : "services"} />
      <ServicesContainer>
        {SERVICES_DATA[lang].map(({ img, title, description }) => (
          <ServiceCard
            key={title}
            img={img}
            title={title}
            description={description}
          />
        ))}
      </ServicesContainer>
    </Layout>
  );
}
