import styled from "styled-components";

const HomeBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.5);
  background-image: url('https://res.cloudinary.com/deudpvv78/image/upload/c_scale,w_1440/v1613404170/dcproject/home_img/home_mnu4e4');
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: 0;
`;

const HomeDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.h1`
  font-size: 45px;
  font-family: "Roboto-Bold";
  font-weight: 900;
  margin: 0;
  color: #fff;
  z-index: 1;
  @media (min-width: 1025px) {
    margin-top: 5rem;
  }
`;

const Hr = styled.hr`
  margin: 1.5rem auto 2rem auto;
  width: 120px;
  border: 0;
  border-top: 3px solid #0476d0;
  z-index: 1;
`;

const HomeSubtitle = styled.h3`
  font-size: 20px;
  font-family: "Roboto-Regular";
  font-weight: 500;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 3rem;
  text-shadow: 1px 1px 3px #000000a1;
  opacity: 0.8;
  color: #fff;
  z-index: 1;
  @media (max-width: 640px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export { HomeBg, HomeDataContainer, HomeTitle, Hr, HomeSubtitle }
