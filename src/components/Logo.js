import styled from "styled-components";

import useContentful from "hooks/useContentful";

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

const query = `
  {
    headerLogoCollection {
      items {
        img {
          url
          title
        }
      }
    }
  }
`;

export default function Logo() {
  const landingData = useContentful({ query });
  const logo = landingData?.headerLogoCollection.items[0].img;

  return (
    <a href="#home">
      <LogoStyled src={logo?.url} alt={logo?.title} />
    </a>
  );
}
