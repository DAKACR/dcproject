import styled from "styled-components";

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
  box-sizing: border-box;
  padding: 0 3rem;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export { ServicesContainer };
