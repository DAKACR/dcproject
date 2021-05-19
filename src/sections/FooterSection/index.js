import { useContext } from "react";

import { LinksDataContext } from "context/linkcontext";
import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import LinkList from "components/LinkList";
import Link from "components/Link";

import { CopyrightText } from "./styles";

export default function FooterSection() {
  const LINKS = useContext(LinksDataContext);
  const { lang } = useContext(LanguageContext);

  return (
    <Layout section="footer">
      <LinkList section="footer">
        {LINKS[lang].map((text) => (
          <Link key={text} text={text} />
        ))}
      </LinkList>
      <CopyrightText>
        {lang === "es"
          ? "Copyright © 2020 Todos los derechos reservados - DCProject"
          : "Copyright © 2020 All Rights Reserved - DCProject"}
      </CopyrightText>
    </Layout>
  );
}
