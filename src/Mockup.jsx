import { Title } from "./components/Layout";
import { useForm } from "./contexts/FormContext";

export default function Preview({ educations, experiences, skillsData }) {
  const { formData } = useForm();

  // format date
  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="mockup-view" style={{ width: "100%" }}>
      <h2 className="no-print">Preview</h2>
      <div className="preview" style={{ position: "sticky", top: "0", height: "100vh", overflowY: "scroll" }}>
        <h1 style={{ textAlign: "center" }}>{formData.name || "Name"}</h1>

        <div className="contact-info">
          <span> {formData.location || "City, State"}</span> |
          <span> {formData.email || "email@example.com"}</span> |
          <span> {formData.phone || "(123) 456-7890"}</span> |
          <span> {formData.profile || "linkedin.com"}</span>
        </div>
        <br />

        <Title title={"Summary"}>
          <p>
            {formData.message ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda commodi, nulla tenetur iure excepturi id sit aperiam corporis quaerat vero alias fuga ullam perspiciatis eaque numquam consequuntur minima ea."}
          </p>
          <br />
        </Title>

        <Title title={"Education"}>
          {educations.map((edu) => (
            <div key={edu.id}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{edu.institution || "University of "}</strong>
                <p>{edu.gradDate || "Expected May 20XX"}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{edu.degree || "Bachelor of Science in Computer Science"}</p>
                <p>{edu.field || "City, State"}</p>
              </div>
              <br />
            </div>
          ))}
        </Title>

        <Title title={"Experience"}>
          {experiences.map((exp) => (
            <div key={exp.id}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>{exp.position || "Full Stacks Web Developer"}</h4>
                <p>
                  {exp.start ? formatted.format(new Date(exp.start)) : "???"} -{" "}
                  {exp.end ? formatted.format(new Date(exp.end)) : "Present"}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{exp.company || "Web Designs Co"}</p>
                <p>{exp.compLoc || "City, State"}</p>
              </div>

              <ul className="desc-list">
                {exp.descriptions.map((d) =>
                  d.text.trim() ? (
                    <li key={d.id}>{d.text}</li>
                  ) : (
                    <li key={d.id}>...</li>
                  ),
                )}
              </ul>
              <br />
            </div>
          ))}
        </Title>

        <Title
          title={
            (skillsData.tech.length > 0 ||
              skillsData.prof.length > 0 ||
              skillsData.lang.length > 0) &&
            "Skills"
          }
          remove={
            skillsData.tech.length > 0 ||
            skillsData.prof.length > 0 ||
            skillsData.lang.length > 0
              ? false
              : true
          }
        >
          {skillsData.tech.length > 0 && (
            <>
              <h3>Technical Skills</h3>
              <ul className="skill-list">
                {skillsData.tech.map((skill) => (
                  <li key={crypto.randomUUID()}>{skill}</li>
                ))}
              </ul>
            </>
          )}
          {skillsData.prof.length > 0 && (
            <>
              <h3>Professional Skills</h3>
              <ul className="skill-list">
                {skillsData.prof.map((skill) => (
                  <li key={crypto.randomUUID()}>{skill}</li>
                ))}
              </ul>
            </>
          )}
          {skillsData.lang.length > 0 && (
            <>
              <h3>Languages</h3>
              <ul className="skill-list">
                {skillsData.lang.map((skill) => (
                  <li key={crypto.randomUUID()}>{skill}</li>
                ))}
              </ul>
            </>
          )}
        </Title>
      </div>
    </div>
  );
}
