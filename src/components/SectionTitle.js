import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 900;
  font-family: "Roboto-Regular";
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  margin: 0;
  color: #000;
  text-transform: uppercase;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const Hr = styled.hr`
  width: 50px;
  border: 0;
  border-top: 3px solid #0476d0;
  margin-top: 1rem;
`;

export default function SectionTitle({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Hr />
    </Container>
  );
}
