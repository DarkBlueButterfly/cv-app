import { useState } from "react";

function SkillInput({ value, onChange, onRemove, placeholder }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}
    >
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: " 8px", fontSize: "1rem" }}
      />
      <button
        onClick={onRemove}
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
  );
}

export default function SkillSection({ title, placeholder, onUpdate }) {
  const [skills, setSkills] = useState([
    { id: crypto.randomUUID(), value: "" },
  ]);

  // to display in preview
  const notifyParent = (newSkills) => {
    const valuesOnly = newSkills.map((s) => s.value).filter(Boolean);
    onUpdate(valuesOnly);
  };

  const addSkill = () => {
    const newItems = [...skills, { id: crypto.randomUUID(), value: "" }];
    setSkills(newItems);
    notifyParent(newItems);
  };

  const updateSkill = (id, newValue) => {
    const newItems = skills.map((skill) =>
      skill.id === id ? { ...skill, value: newValue } : skill,
    );
    setSkills(newItems);
    notifyParent(newItems);
  };

  const removeSkill = (id) => {
    const newItems = skills.filter((skill) => skill.id !== id);
    setSkills(newItems);
    notifyParent(newItems);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <button onClick={addSkill} style={{ background: "green" }}>
          Add {title}
        </button>
      </div>

      {skills.map((skill) => (
        <SkillInput
          key={skill.id}
          value={skill.value}
          placeholder={placeholder}
          onChange={(e) => updateSkill(skill.id, e.target.value)}
          onRemove={() => removeSkill(skill.id)}
        />
      ))}
    </div>
  );
}
