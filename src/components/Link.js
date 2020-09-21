import React from "react";
import styled from "styled-components";

const StyledLink = styled.li`
  color: #fff;
  font-size: 12px;
  margin-left: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Roboto-Regular";
  text-transform: uppercase;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }
`;

export default function Link({ text, section, handleMenu }) {
  const handleScrollTo = () => {
    section.current.scrollIntoView({ behavior: "smooth", block: "center" });
    if (!!handleMenu) handleMenu(false);
  };

  return <StyledLink onClick={handleScrollTo}>{text}</StyledLink>;
}
