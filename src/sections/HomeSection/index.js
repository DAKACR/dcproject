import { useLandingTextContext } from "context/landingtextcontext";

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
  const text = useLandingTextContext();
  console.log(text);
  return (
    <Layout id="home" section="home" background={<HomeBg />}>
      <HomeDataContainer>
        <HomeTitle>{text.homeTitle}</HomeTitle>
        <Hr />
        <HomeSubtitle>{text.homeParagraph}</HomeSubtitle>
        <Button text={text.homeCta} section="home" />
      </HomeDataContainer>
    </Layout>
  );
}
