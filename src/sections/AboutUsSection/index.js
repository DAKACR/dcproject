import useContentful from "hooks/useContentful";
import { useLanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import {
  AboutUsContainer,
  AboutUsDataContainer,
  AboutUsDataTitle,
  AboutUsDataParagraph,
  AboutUsImg,
} from "./styles";

const query = (lang) => {
  return `
  {
      aboutCollection(locale: "${lang === "es" ? "es" : "en-US"}") {
        items {
          title
          paragraph
          img {
            url
            title
          }
        }
      }
    }
    `;
};

export default function AboutUsSection() {
  const { lang } = useLanguageContext();
  const landingData = useContentful({ query });
  const aboutData = landingData?.aboutCollection.items;

  return (
    <Layout id="about-us" section="about-us">
      <AboutUsContainer>
        <SectionTitle
          title={lang === "es" ? "acerca de nosotros" : "about us"}
        />
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
