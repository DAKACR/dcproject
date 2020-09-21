import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "assets/css/carousel.css";

import { LanguageContext } from "context/languagecontext";
import { ExpandedGalleryImgContext } from "context/expandedgalleryimgcontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import ExpandImgGallery from "components/ExpandImgGallery";

import GALLERY_DATA from "./gallerydata";

const BODY = document.querySelector("body");

export default function GallerySection({ getRef }) {
  const { lang } = useContext(LanguageContext);
  const { expandedGalleryImg, setExpandedGalleryImg } = useContext(
    ExpandedGalleryImgContext
  );

  if (expandedGalleryImg) {
    BODY.style.overflowY = "hidden";
  } else {
    BODY.style.overflowY = "scroll";
  }

  return (
    <Layout section="gallery" getRef={getRef}>
      <SectionTitle title={lang === "es" ? "galería" : "gallery"} />
      {!!expandedGalleryImg && (
        <ExpandImgGallery
          img={expandedGalleryImg}
          clearExpandedImg={setExpandedGalleryImg}
        />
      )}
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showIndicators={false}
          showStatus={false}
        >
          {GALLERY_DATA.map((img) => (
            <div key={img} onClick={() => setExpandedGalleryImg(img)}>
              <img src={img} alt="imagen de portafolio" />
            </div>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
}
