import React, { useContext } from "react";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import {
  AboutUsContainer,
  AboutUsDataContainer,
  AboutUsDataTitle,
  AboutUsDataParagraph,
} from "./styles";

import ABOUT_US_DATA from "./aboutusdata";

export default function AboutUsSection() {
  const { lang } = useContext(LanguageContext);

  return (
    <Layout section="about-us">
      <AboutUsContainer>
        <SectionTitle title="sobre nosotros" />
        {ABOUT_US_DATA[lang].map((about) => (
          <AboutUsDataContainer key={about.title}>
            <AboutUsDataTitle>{about.title}</AboutUsDataTitle>
            <AboutUsDataParagraph>{about.paragraph}</AboutUsDataParagraph>
          </AboutUsDataContainer>
        ))}
      </AboutUsContainer>
    </Layout>
  );
}
