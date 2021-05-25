import useContentful from "hooks/useContentful";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import { useLanguageContext } from "context/languagecontext";

import { MostUsedProgramsContainer, MostUsedProgramsTitle } from "./styles";

const query = `
  {
    softwaresCollection {
      items {
        list
      }
    }
  }
`;

export default function MostUsedPrograms() {
  const { lang } = useLanguageContext();
  const landingData = useContentful({ query });
  //list is a string separated by \n
  const list = landingData?.softwaresCollection.items[0].list.split("\n");

  return (
    <Layout id="programs" section="most-used-programs">
      <SectionTitle
        title={lang === "es" ? "programas más usados" : "softwares"}
      />
      <MostUsedProgramsContainer>
        {list
          ? list.map((program) => (
              <MostUsedProgramsTitle key={program}>
                {program}
              </MostUsedProgramsTitle>
            ))
          : null}
      </MostUsedProgramsContainer>
    </Layout>
  );
}
