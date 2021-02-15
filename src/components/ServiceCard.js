import React from "react";
import styled from "styled-components";

import { Image, Transformation } from 'cloudinary-react';

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
  transition: 0.5s all;
  cursor: pointer;
  margin-left: 3rem;
  margin-top: 2rem;
  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    box-shadow: 0px 33px 33px -16px #00000021;
  }
  @media (max-width: 640px) {
    height: 280px;
    margin-left: 0;
    margin-top: 1rem;
  }
`;
const StyledImage = styled(Image)`
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

export default function ServiceCard({ img, title, description }) {
  return (
    <Container>
      <StyledImage publicId={img} secure="true" alt="service image">
        <Transformation width={300} crop="scale" />
      </StyledImage>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
