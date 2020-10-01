import React from "react";
import styled from "styled-components";

import logo from "assets/img/header/logo.jpg";

const LogoStyled = styled.img`
  color: #fff;
  width: 90px;
  margin: 0;
  font-family: "Roboto-Bold";
  position: relative;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export default function Logo() {
  return <LogoStyled src={logo} alt="logo" />;
}
