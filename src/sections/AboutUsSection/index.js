import { useContext } from "react";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import {
  AboutUsContainer,
  AboutUsDataContainer,
  AboutUsDataTitle,
  AboutUsDataParagraph,
  AboutUsImg,
} from "./styles";

import ABOUT_US_DATA from "./aboutusdata";

export default function AboutUsSection() {
  const { lang } = useContext(LanguageContext);

  return (
    <Layout id="about-us" section="about-us">
      <AboutUsContainer>
        <SectionTitle title={lang === "es" ? "sobre nosotros" : "about us"} />
        {ABOUT_US_DATA[lang].map(({ title, paragraph, img }) => (
          <AboutUsDataContainer key={title}>
            <AboutUsDataTitle>{title}</AboutUsDataTitle>
            {paragraph ? (
              <AboutUsDataParagraph>{paragraph}</AboutUsDataParagraph>
            ) : (
              <AboutUsImg publicId={img} />
            )}
          </AboutUsDataContainer>
        ))}
      </AboutUsContainer>
    </Layout>
  );
}
