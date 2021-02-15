import React, { useState, useEffect, useContext } from "react";

import { LanguageContext } from "context/languagecontext";
import { ExpandedGalleryImgContext } from "context/expandedgalleryimgcontext";

import Layout from "components/Layout";
import Logo from "components/Logo";
import ContactButton from "components/ContactButton";
import BurguerMenu from "components/BurguerMenu";
import LinkList from "components/LinkList";
import LanguageButton from "components/LanguageButton";

import { RightSideContainer } from "./styles";

const BODY = document.querySelector("body");

export default function HeaderSection() {
  const [showMenu, setShowMenu] = useState(false);
  const [mediaMatch, setMediaMatch] = useState({
    mobile: window.matchMedia("(max-width: 1024px)").matches,
    pc: window.matchMedia("(min-width: 1025px)").matches
  });
  const { lang, setLang } = useContext(LanguageContext);
  const { setExpandedGalleryImg } = useContext(ExpandedGalleryImgContext);


  useEffect(() => {
    setMediaMatch({
      mobile: window.matchMedia("(max-width: 1024px)").matches,
      pc: window.matchMedia("(min-width: 1025px)").matches
    })
  }, [showMenu])

  const handleMenu = (show) => {
    if (show) {
      BODY.style.overflowY = "hidden";
    } else {
      BODY.style.overflowY = "scroll";
      setExpandedGalleryImg(false);
    }
    setShowMenu(show);
  };

  return (
    <Layout section="header">
      <Logo />
      <RightSideContainer>
        <BurguerMenu handleMenu={handleMenu} />
        {(showMenu && mediaMatch.mobile) ||
        mediaMatch.pc ? (
          <LinkList section="header" handleMenu={handleMenu} />
        ) : null}
        <ContactButton />
        <LanguageButton lang={lang} setLang={setLang} />
      </RightSideContainer>
    </Layout>
  );
}
