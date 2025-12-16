import { useState } from "react";
import { FormProvider } from "./contexts/FormContext";
import { CVHeader, SectionContainer, TitleHead } from "./components/Layout";
import Personal from "./components/Personal";
import Education from "./components/Education";
import SkillSection from "./components/Skills";
import ExperienceForm from "./components/Experience";
import Preview from "./Mockup";

function App() {
  const [experiences, setExperiences] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      compLoc: "",
      start: "",
      end: "",
      descriptions: [{ id: crypto.randomUUID(), text: "" }],
    },
  ]);

  const [educations, setEducations] = useState([
    {
      id: crypto.randomUUID(),
      institution: "",
      degree: "",
      field: "",
      gradDate: "",
    },
  ]);

  const [previewData, setPreviewData] = useState({
    tech: [],
    prof: [],
    lang: [],
  });

  return (
    <FormProvider>
      <div
        className="no-print"
        style={{ position: "sticky", top: "0", zIndex: "1000" }}
      >
        <CVHeader title={"CV Creator"} onClick={() => window.print()} />
      </div>
      <div className="main">
        <div className="no-print">
          <SectionContainer>
            <Personal />
          </SectionContainer>
          <SectionContainer>
            <Education educations={educations} setEducations={setEducations} />
          </SectionContainer>
          <SectionContainer>
            <ExperienceForm
              experiences={experiences}
              setExperiences={setExperiences}
            />
          </SectionContainer>
          <SectionContainer>
            <TitleHead title={"Skills"} />
            <SkillSection
              title={"Technical Skills"}
              placeholder={"React, JavaScript, etc"}
              onUpdate={(values) =>
                setPreviewData((data) => ({ ...data, tech: values }))
              }
            />
            <SkillSection
              title={"Professional Skills"}
              placeholder={"Leadership, Communication, etc"}
              onUpdate={(values) =>
                setPreviewData((data) => ({ ...data, prof: values }))
              }
            />
            <SkillSection
              title={"Languages"}
              placeholder={"Native Spanish, Conversational Japanese, etc"}
              onUpdate={(values) =>
                setPreviewData((data) => ({ ...data, lang: values }))
              }
            />
          </SectionContainer>
        </div>
        <Preview
          educations={educations}
          experiences={experiences}
          skillsData={previewData}
        />
      </div>
    </FormProvider>
  );
}

export default App;
