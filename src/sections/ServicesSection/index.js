import { useLandingDataContext } from "context/landingdatacontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import ServiceCard from "components/ServiceCard";

import { ServicesContainer } from "./styles";

export default function ServicesSection() {
  const landingData = useLandingDataContext();
  const servicesData = landingData?.servicesCollection.items;

  return (
    <Layout id="services" section="services">
      <SectionTitle title={"services"} />
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
