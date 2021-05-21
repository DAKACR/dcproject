import { useLandingDataContext } from "context/landingdatacontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import { MostUsedProgramsContainer, MostUsedProgramsTitle } from "./styles";

export default function MostUsedPrograms() {
  const landingData = useLandingDataContext();
  //list is a string separated by \n
  const list = landingData?.softwaresCollection.items[0].list.split("\n");

  return (
    <Layout id="programs" section="most-used-programs">
      <SectionTitle title={"softwares"} />
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
