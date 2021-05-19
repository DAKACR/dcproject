import { Carousel } from "react-responsive-carousel";
import "assets/css/carousel.css";

import { useLandingDataContext } from "context/landingdatacontext";
import { useGalleryZoomContext } from "context/galleryzoomcontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import GalleryZoomImg from "components/GalleryZoomImg";

import useDontScrollOnZoom from "hooks/useDontScrollOnZoom";

export default function GallerySection() {
  const landingData = useLandingDataContext();
  const { galleryZoom, setGalleryZoom } = useGalleryZoomContext();
  useDontScrollOnZoom(galleryZoom);

  return (
    <Layout id="gallery" section="gallery">
      <SectionTitle title={"gallery"} />
      {!!galleryZoom && (
        <GalleryZoomImg img={galleryZoom} clearGalleryZoom={setGalleryZoom} />
      )}
      {/* <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showIndicators={false}
          showStatus={false}
        >
          {.map((img) => (
            <div key={img} onClick={() => setGalleryZoom(img)}>
              <img src={img} alt="portafolio work" />
            </div>
          ))}
        </Carousel>
      </div> */}
    </Layout>
  );
}
