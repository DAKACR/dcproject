import useContentful from "hooks/useContentful";

import Layout from "components/Layout";
import Button from "components/Button";

import {
  HomeBg,
  HomeDataContainer,
  HomeTitle,
  Hr,
  HomeSubtitle,
} from "./styles";

const query = (lang) => {
  return `
  {
    homeCollection(locale: "${lang === "es" ? "es" : "en-US"}") {
      items {
        title
        subtitle
        cta
        background {
          url
        }
      }
    }
  }`;
};

export default function HomeSection() {
  const landingData = useContentful({ query });
  const homeData = landingData?.homeCollection.items[0];

  return (
    <Layout id="home" section="home">
      <HomeBg background={homeData?.background.url} />
      <HomeDataContainer>
        <HomeTitle>{homeData?.title}</HomeTitle>
        <Hr />
        <HomeSubtitle>{homeData?.subtitle}</HomeSubtitle>
        <Button text={homeData?.cta} section="home" />
      </HomeDataContainer>
    </Layout>
  );
}
