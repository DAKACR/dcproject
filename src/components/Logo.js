import styled from "styled-components";

import { useLandingDataContext } from "context/landingdatacontext";

const LogoStyled = styled.img`
  width: 150px;
  margin: 0;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
  @media (max-width: 640px) {
    width: 125px;
  }
`;

export default function Logo() {
  const landingData = useLandingDataContext();
  const logo = landingData?.headerLogoCollection.items[0].img;

  return (
    <a href="#home">
      <LogoStyled src={logo?.url} alt={logo?.title} />
    </a>
  );
}
