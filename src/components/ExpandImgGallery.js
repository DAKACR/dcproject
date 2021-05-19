import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% {
    transform: scale(0.3);
  }
  90% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ImgBackground = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  position: fixed;
  left: 0;
  bottom: 0;
  background: #000000;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 0.3s ${appear};
  & > img {
    width: 100%;
  }
`;

const CloseMenu = styled.div`
  display: block;
  position: absolute;
  background: #000;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 30px;
  fill: #fff;
  font-family: "Roboto-Bold";
  font-size: 40px;
  cursor: pointer;
`;

export default function ExpandImgGallery({ img, clearExpandedImg }) {
  return (
    <ImgBackground>
      <CloseMenu role="button" onClick={() => clearExpandedImg("")}>
        &times;
      </CloseMenu>
      <img src={img} alt="imagen de galería aumentada" />
    </ImgBackground>
  );
}
