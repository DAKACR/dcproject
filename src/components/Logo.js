import styled from "styled-components";

const LogoStyled = styled.img`
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
  return (
    <a href="#home">
      <LogoStyled
        src=""
        alt="logo"
      />
    </a>
  );
}
