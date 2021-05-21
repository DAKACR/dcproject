import { useLandingDataContext } from "context/landingdatacontext";

import Layout from "components/Layout";
import Button from "components/Button";

import {
  HomeBg,
  HomeDataContainer,
  HomeTitle,
  Hr,
  HomeSubtitle,
} from "./styles";

export default function HomeSection() {
  const landingData = useLandingDataContext();
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
