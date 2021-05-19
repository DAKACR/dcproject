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

  return (
    <Layout id="home" section="home" background={<HomeBg />}>
      <HomeDataContainer>
        <HomeTitle>{landingData.homeTitle}</HomeTitle>
        <Hr />
        <HomeSubtitle>{landingData.homeParagraph}</HomeSubtitle>
        <Button text={landingData.homeCta} section="home" />
      </HomeDataContainer>
    </Layout>
  );
}
