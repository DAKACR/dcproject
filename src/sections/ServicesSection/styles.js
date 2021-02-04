import styled from "styled-components";

const ServicesContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem 0;
  margin-bottom: 2rem;
  box-sizing: border-box;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem 0;
  }
`;

export { ServicesContainer };
