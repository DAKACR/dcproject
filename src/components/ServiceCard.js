import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 2rem;
  @media (min-width: 640px) {
    &:nth-child(even) {
      margin-left: 3rem;
    }
  }
  @media (max-width: 640px) {
    height: 280px;
    margin-top: 1rem;
  }
  @media (min-width: 1025px) {
    margin-left: 3rem;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10rem;
  border-radius: 7px;
  margin-top: 0px;
  filter: brightness(0.6);
  position: absolute;
  z-index: 0;
`;
const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  font-family: "Roboto-Regular";
  margin: 1.5rem 0 0.3rem 0;
  transition: 0.5s all;
  z-index: 1;
`;
const Description = styled.h3`
  width: 90%;
  font-size: 16px;
  color: #fff;
  text-shadow: 0px 0px 3px #000;
  font-weight: 900;
  font-family: "Roboto-Thin";
  transition: 0.5s all;
  z-index: 1;
`;

export default function ServiceCard({ imgData, title, description }) {
  return (
    <Container>
      <StyledImage
        src={imgData.url}
        secure="true"
        alt={imgData.title}
      ></StyledImage>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
