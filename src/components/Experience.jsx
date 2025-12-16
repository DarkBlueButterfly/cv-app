import { TitleHead } from "./Layout";

// Experience Full Form
export default function ExperienceForm({ experiences, setExperiences }) {
  const addExperience = () => {
    setExperiences([
      ...experiences,
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
  };

  const deleteExperience = (expId) => {
    const updated = experiences.filter((exp) => exp.id !== expId);

    // Keep at least one blank experience
    if (updated.length === 0) {
      updated.push({
        id: crypto.randomUUID(),
        company: "",
        position: "",
        compLoc: "",
        start: "",
        end: "",
        descriptions: [{ id: crypto.randomUUID(), text: "" }],
      });
    }

    setExperiences(updated);
  };

  return (
    <div>
      <TitleHead title={"Experience"} button={true} onClick={addExperience} />

      {experiences.map((exp, index) => (
        <ExperienceInput
          key={exp.id}
          exp={exp}
          index={index}
          experiences={experiences}
          setExperiences={setExperiences}
          deleteExperiences={deleteExperience} // need exp.id?
        />
      ))}
    </div>
  );
}

// Experience Input Form (inputs + description)
function ExperienceInput({
  exp,
  experiences,
  setExperiences,
  deleteExperiences,
  index,
}) {
  const updateField = (field, value) => {
    const updated = experiences.map((e) =>
      e.id === exp.id ? { ...e, [field]: value } : e,
    );
    setExperiences(updated);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Experience {index + 1}</h3>
        <button
          onClick={() => deleteExperiences(exp.id)}
          style={{
            padding: "8px 12px",
            background: "#ff4444",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Delete
        </button>
      </div>

      <label>
        Company:
        <input
          type="text"
          value={exp.company}
          placeholder="Company Name"
          onChange={(e) => updateField("company", e.target.value)}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          value={exp.position}
          placeholder="Job Title"
          onChange={(e) => updateField("position", e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={exp.compLoc}
          placeholder="City, State"
          onChange={(e) => updateField("compLoc", e.target.value)}
        />
      </label>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            value={exp.start}
            onChange={(e) => updateField("start", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          End Date: (Optional)
          <input
            type="date"
            value={exp.end}
            onChange={(e) => updateField("end", e.target.value)}
          />
        </label>
      </div>

      <DescriptionPoints
        expId={exp.id}
        descriptions={exp.descriptions}
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </div>
  );
}

// Description List
function DescriptionPoints({
  expId,
  descriptions,
  experiences,
  setExperiences,
}) {
  const updateDesc = (descId, value) => {
    const updated = experiences.map((exp) => {
      if (exp.id !== expId) return exp;

      return {
        ...exp,
        descriptions: exp.descriptions.map((d) =>
          d.id === descId ? { ...d, text: value } : d,
        ),
      };
    });

    setExperiences(updated);
  };

  const addDesc = () => {
    const updated = experiences.map((exp) => {
      if (exp.id !== expId) return exp;

      return {
        ...exp,
        descriptions: [
          ...exp.descriptions,
          { id: crypto.randomUUID(), text: "" },
        ],
      };
    });

    setExperiences(updated);
  };

  const deleteDesc = (descId) => {
    const updated = experiences.map((exp) => {
      if (exp.id !== expId) return exp;

      let filtered = exp.descriptions.filter((d) => d.id !== descId);

      // Ensure at least one empty desc exists
      if (filtered.length === 0) {
        filtered = [{ id: crypto.randomUUID(), text: "" }];
      }

      return { ...exp, descriptions: filtered };
    });

    setExperiences(updated);
  };

  return (
    <div>
      <TitleHead
        title={"Descriptions"}
        button={true}
        main={false}
        onClick={addDesc}
      />

      {descriptions.map((d) => (
        <div
          key={d.id}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "5px",
          }}
        >
          <textarea
            type="text"
            value={d.text}
            placeholder="List one of your main responsibilities"
            onChange={(e) => updateDesc(d.id, e.target.value)}
          />
          <button
            onClick={() => deleteDesc(d.id)}
            style={{
              padding: "8px 12px",
              background: "#ff4444",
              color: "white",
              borderRadius: "4px",
              margin: "auto",
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
