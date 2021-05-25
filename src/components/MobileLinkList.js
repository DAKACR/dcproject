import styled, { keyframes } from "styled-components";

import Link from "components/Link";

import { useLanguageContext } from "context/languagecontext";

import navLinks from "constants/navlinks";

const appear = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0.1;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const StylelLinkMobile = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  animation: ${appear} 0.3s;
  list-style: none;
  padding: 0;
  & > li {
    width: 80%;
    margin-left: 0;
    font-size: 22px;
    margin-top: 3rem;
  }
`;

const CloseMenu = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  right: 30px;
  fill: #fff;
  font-family: "Roboto-Bold";
  font-size: 40px;
  cursor: pointer;
`;

const MobileLinkList = ({ showMenu, handleMenu }) => {
  const { lang } = useLanguageContext();

  if (!showMenu) return null;

  return (
    <StylelLinkMobile>
      <CloseMenu role="button" onClick={() => handleMenu(false)}>
        &times;
      </CloseMenu>
      {navLinks[lang].map(({ href, text }) => (
        <Link key={text} href={href} text={text} handleMenu={handleMenu} />
      ))}
    </StylelLinkMobile>
  );
};

export default MobileLinkList;
