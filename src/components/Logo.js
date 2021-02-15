import React from "react";
import styled from "styled-components";

import { Image, Transformation } from 'cloudinary-react';

const LogoStyled = styled(Image)`
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
    <LogoStyled publicId="v1613404062/dcproject/header/logo_heh0jz" secure="true">
      <Transformation width="150" crop="scale" />
    </LogoStyled>
  )
}
