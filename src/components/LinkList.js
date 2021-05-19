import { useState, useEffect, useContext } from "react";
import styled, { css, keyframes } from "styled-components";

import { LinksDataContext } from "context/linkcontext";
import { LanguageContext } from "context/languagecontext";

import Link from "components/Link";

const appear = keyframes`
  from {
    transform: scale(0.7);
    opacity: 0.1;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledLinkList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  animation: ${appear} 0.3s;
  & > close {
    display: none;
  }

  ${({ section }) => {
    switch (section) {
      case "header":
        return css`
          @media (max-width: 1024px) {
            width: 100vw;
            height: 100vh;
            background: #000;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 100;
            & > li {
              width: 80%;
              margin-left: 0;
              font-size: 22px;
              margin-top: 3rem;
            }
          }
        `;

      case "footer":
        return css`
          justify-content: center;

          @media (max-width: 640px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px 0;
            padding: 0 2rem;
            & > li {
              margin-left: 0;
              align-self: center;
            }
          }
        `;

      default:
        break;
    }
  }}
`;

const CloseMenu = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 30px;
  fill: #fff;
  font-family: "Roboto-Bold";
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export default function LinkList({ section, showMenu, handleMenu }) {
  const [isDesktop, setIsDesktop] = useState(true);
  const LINKS = useContext(LinksDataContext);
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    const showNavBarOnDesktop = () => {
      const isDesktop = window.matchMedia("(min-width: 1025px)").matches;

      if (isDesktop) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    showNavBarOnDesktop();

    window.addEventListener("resize", showNavBarOnDesktop);

    return () => {
      window.removeEventListener("resize", showNavBarOnDesktop);
    };
  });

  if (!showMenu && section === "header" && isDesktop === false) return null;

  return (
    <StyledLinkList section={section}>
      <CloseMenu role="button" onClick={() => handleMenu(false)}>
        &times;
      </CloseMenu>
      {LINKS[lang].map(({ href, text }) => (
        <Link key={text} href={href} text={text} handleMenu={handleMenu} />
      ))}
    </StyledLinkList>
  );
}
