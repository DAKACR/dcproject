import { useLandingDataContext } from "context/landingdatacontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import {
  AboutUsContainer,
  AboutUsDataContainer,
  AboutUsDataTitle,
  AboutUsDataParagraph,
  AboutUsImg,
} from "./styles";

export default function AboutUsSection() {
  const landingData = useLandingDataContext();
  const aboutData = landingData?.aboutCollection.items;

  return (
    <Layout id="about-us" section="about-us">
      <AboutUsContainer>
        <SectionTitle title={"about us"} />
        {aboutData
          ? aboutData.map(({ title, paragraph, img }) => (
              <AboutUsDataContainer key={title}>
                <AboutUsDataTitle>{title}</AboutUsDataTitle>
                {paragraph ? (
                  <AboutUsDataParagraph>{paragraph}</AboutUsDataParagraph>
                ) : (
                  <AboutUsImg src={img.url} alt={img.title} />
                )}
              </AboutUsDataContainer>
            ))
          : null}
      </AboutUsContainer>
    </Layout>
  );
}
