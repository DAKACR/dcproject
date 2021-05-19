import styled from "styled-components";

const StyledLink = styled.li`
  font-size: 12px;
  margin-left: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Roboto-Regular";
  text-transform: uppercase;
  cursor: pointer;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: 0.3s border-bottom;
  position: relative;
  &:first-of-type {
    margin-left: 0;
    margin-top: 0;
  }
  &:hover {
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background: #0a93ff;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #fff;
`;

export default function Link({ href, text, handleMenu }) {
  const handleScrollTo = () => {
    if (!!handleMenu) handleMenu(false);
  };

  return (
    <StyledLink onClick={handleScrollTo}>
      <StyledA href={`#${href}`}>{text}</StyledA>
    </StyledLink>
  );
}
