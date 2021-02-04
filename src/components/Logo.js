import React from "react";
import styled from "styled-components";

import logo from 'assets/img/header/default.svg'

const LogoStyled = styled.img`
  margin: 0;
  width: 90px;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export default function Logo({ children }) {
  return <LogoStyled src={logo} alt="logo" />;
}
