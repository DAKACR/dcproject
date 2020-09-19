import React, { useContext } from "react";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import { MostUsedProgramsContainer, MostUsedProgramsTitle } from "./styles";

import PROGRAMS_DATA from "./programsdata";

export default function MostUsedPrograms() {
  const { lang } = useContext(LanguageContext);

  return (
    <Layout section="most-used-programs">
      <SectionTitle
        title={
          lang === "es" ? "programas más utilizados" : "most used programs"
        }
      />
      <MostUsedProgramsContainer>
        {PROGRAMS_DATA.map((program) => (
          <MostUsedProgramsTitle key={program}>{program}</MostUsedProgramsTitle>
        ))}
      </MostUsedProgramsContainer>
    </Layout>
  );
}
