import { useState } from "react";

import { useLanguageContext } from "context/languagecontext";
import { useGalleryZoomContext } from "context/galleryzoomcontext";

import Layout from "components/Layout";
import Logo from "components/Logo";
import ContactButton from "components/ContactButton";
import BurguerMenu from "components/BurguerMenu";
import LinkList from "components/LinkList";
import MobileLinkList from "components/MobileLinkList";
import LanguageButton from "components/LanguageButton";

import useIsDesktop from "hooks/useIsDesktop";

import { RightSideContainer } from "./styles";

const BODY = document.querySelector("body");

export default function HeaderSection() {
  const [showMenu, setShowMenu] = useState(false);
  const { lang, setLang } = useLanguageContext();
  const { setGalleryZoom } = useGalleryZoomContext();
  const isDesktop = useIsDesktop();

  const handleMenu = (show) => {
    if (show) {
      BODY.style.overflowY = "hidden";
    } else {
      BODY.style.overflowY = "scroll";
      setGalleryZoom(false);
    }
    setShowMenu(show);
  };

  return (
    <Layout section="header">
      <Logo />
      <RightSideContainer>
        <BurguerMenu handleMenu={handleMenu} />
        {isDesktop ? (
          <LinkList />
        ) : (
          <MobileLinkList showMenu={showMenu} handleMenu={handleMenu} />
        )}
        <ContactButton />
        <LanguageButton lang={lang} setLang={setLang} />
      </RightSideContainer>
    </Layout>
  );
}
