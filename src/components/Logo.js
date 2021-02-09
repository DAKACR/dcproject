import React from "react";
import styled from "styled-components";

import logo from 'assets/img/header/logo.jpeg'

const LogoStyled = styled.img`
  margin: 0;
  width: 150px;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
  @media (max-width: 640px) {
    width: 125px;
  }
`;

export default function Logo({ children }) {
  return <LogoStyled src={logo} alt="logo" />;
}
