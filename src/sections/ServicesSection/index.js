import useContentful from "hooks/useContentful";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import ServiceCard from "components/ServiceCard";

import { useLanguageContext } from "context/languagecontext";

import { ServicesContainer } from "./styles";

const query = (lang) => {
  return `
  {
    servicesCollection(locale: "${lang === "es" ? "es" : "en-US"}") {
      items {
        img {
          url
          title
        }
        title
        description
      }
    }
  }`;
};

export default function ServicesSection() {
  const { lang } = useLanguageContext();
  const landingData = useContentful({ query });
  const servicesData = landingData?.servicesCollection.items;

  return (
    <Layout id="services" section="services">
      <SectionTitle title={lang === "es" ? "servicios" : "services"} />
      <ServicesContainer>
        {servicesData
          ? servicesData.map(({ img, title, description }) => (
              <ServiceCard
                key={title}
                imgData={img}
                title={title}
                description={description}
              />
            ))
          : null}
      </ServicesContainer>
    </Layout>
  );
}
