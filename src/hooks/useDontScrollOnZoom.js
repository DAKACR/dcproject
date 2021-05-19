import { useEffect } from "react";

const BODY = document.querySelector("body");

const useDontScrollOnZoom = (galleryZoom) => {
  useEffect(() => {
    if (galleryZoom) {
      BODY.style.overflowY = "hidden";
    } else {
      BODY.style.overflowY = "scroll";
    }
  }, [galleryZoom]);
};

export default useDontScrollOnZoom;
