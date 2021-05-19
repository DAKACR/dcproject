import { useLandingDataContext } from "context/landingdatacontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import ServiceCard from "components/ServiceCard";

import { ServicesContainer } from "./styles";

export default function ServicesSection() {
  const landingData = useLandingDataContext();

  return (
    <Layout id="services" section="services">
      <SectionTitle title={"services"} />
      <ServicesContainer>
        {/* {.map(({ img, title, description }) => (
          <ServiceCard
            key={title}
            img={img}
            title={title}
            description={description}
          />
        ))} */}
      </ServicesContainer>
    </Layout>
  );
}
