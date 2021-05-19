import { useLandingDataContext } from "context/landingdatacontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import { MostUsedProgramsContainer, MostUsedProgramsTitle } from "./styles";

export default function MostUsedPrograms() {
  const landingData = useLandingDataContext();

  return (
    <Layout id="programs" section="most-used-programs">
      <SectionTitle title={"softwares"} />
      <MostUsedProgramsContainer>
        {/* {.map((program) => (
          <MostUsedProgramsTitle key={program}>{program}</MostUsedProgramsTitle>
        ))} */}
      </MostUsedProgramsContainer>
    </Layout>
  );
}
