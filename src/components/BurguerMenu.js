import styled from "styled-components";

const BurguerMenuStyles = styled.div`
  display: block;
  width: 35px;
  height: 30px;
  cursor: pointer;
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
