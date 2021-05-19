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

  return (
    <Layout id="about-us" section="about-us">
      <AboutUsContainer>
        <SectionTitle title={"about us"} />
        {/* {.map(({ title, paragraph, img }) => (
          <AboutUsDataContainer key={title}>
            <AboutUsDataTitle>{title}</AboutUsDataTitle>
            {paragraph ? (
              <AboutUsDataParagraph>{paragraph}</AboutUsDataParagraph>
            ) : (
              <AboutUsImg publicId={img} />
            )}
          </AboutUsDataContainer>
        ))} */}
      </AboutUsContainer>
    </Layout>
  );
}
