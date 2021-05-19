import { useLanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import LinkList from "components/LinkList";

import { CopyrightText } from "./styles";

const copyrightTexts = {
  en: "Copyright © 2020 All Rights Reserved - DCProject",
  es: "Copyright © 2020 Todos los derechos reservados - DCProject",
};

export default function FooterSection() {
  const { lang } = useLanguageContext();

  return (
    <Layout section="footer">
      <LinkList footer />
      <CopyrightText>{copyrightTexts[lang]}</CopyrightText>
    </Layout>
  );
}
