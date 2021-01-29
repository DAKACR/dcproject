import React from "react";
import styled from "styled-components";

const LogoStyled = styled.h1`
  color: #fff;
  width: 90px;
  margin: 0;
  font-family: "Roboto-Bold";
  position: relative;
  text-decoration: underline;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export default function Logo({ children }) {
  return <LogoStyled>{children}</LogoStyled>;
}
