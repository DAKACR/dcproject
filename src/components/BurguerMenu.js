import styled from "styled-components";

const BurguerMenuStyles = styled.div`
  width: 35px;
  height: 30px;
  display: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export default function BurguerMenu({ handleMenu }) {
  return (
    <BurguerMenuStyles onClick={() => handleMenu(true)}>
      <svg fill="#fff" viewBox="0 0 100 80" width="30" height="30">
        <rect width="100" height="15" rx="8"></rect>
        <rect y="30" width="100" height="15" rx="8"></rect>
        <rect y="60" width="100" height="15" rx="8"></rect>
      </svg>
    </BurguerMenuStyles>
  );
}
