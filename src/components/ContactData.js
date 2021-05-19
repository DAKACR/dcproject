import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconContainer = styled.span`
  margin-right: 0.5rem;
`;

const StyledContactData = styled.p`
  font-size: 15px;
  font-family: "Roboto-Thin";
  font-weight: 900;
  color: #000;
  margin: 0.3rem 0 0 0;
  &:first-of-type {
    margin: 0;
  }
  ${({ important }) =>
    important &&
    css`
      color: #0476d0;
    `}
`;

export default function ContactData({ icon, text, important }) {
  return (
    <StyledContactData important={important}>
      <IconContainer>
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
      {text}
    </StyledContactData>
  );
}
