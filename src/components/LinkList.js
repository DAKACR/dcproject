import styled, { css } from "styled-components";

import { useLanguageContext } from "context/languagecontext";

import Link from "components/Link";

import navLinks from "constants/navlinks";

const StyledLinkList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  & > close {
    display: none;
  }

  ${({ footer }) => {
    if (footer) {
      return css`
        justify-content: center;

        @media (max-width: 640px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px 0;
          padding: 0 2rem;
          & > li {
            margin-left: 0;
            align-self: center;
          }
        }
      `;
    }
  }}
`;

export default function LinkList({ footer }) {
  const { lang } = useLanguageContext();

  return (
    <StyledLinkList footer={footer}>
      {navLinks[lang].map(({ href, text }) => (
        <Link key={text} href={href} text={text} />
      ))}
    </StyledLinkList>
  );
}
