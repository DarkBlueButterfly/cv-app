import { TitleHead } from "./Layout";

export default function Education({ educations, setEducations }) {
    const addEducation = () => {
        setEducations([
            ...educations,
            {
                id: crypto.randomUUID(),
                institution: "",
                degree: "",
                field: "",
                gradDate: ""
            }
        ]);
    };

    const deleteEducation = (eduId) => {
        const updated = educations.filter((edu) => edu.id !== eduId)

        if (updated.length === 0) {
            updated.push({
                id: crypto.randomUUID(),
                institution: "",
                degree: "",
                field: "",
                gradDate: ""
            });
        }

        setEducations(updated);
    };

    return (
        <div>
            <TitleHead 
                title={"Education"}
                button={true}
                onClick={addEducation}
            />

            {educations.map((edu, index) => (
                <EducationInput 
                    key={edu.id}
                    edu={edu}
                    index={index}
                    educations={educations}
                    setEducations={setEducations}
                    deleteEducation={deleteEducation}
                />
            ))}
        </div>
    )
}

function EducationInput({
    edu,
    educations,
    setEducations,
    deleteEducation,
    index
}) {
  const updateField = (field, value) => {
    const updated = educations.map(e =>
        e.id === edu.id ? {...e, [field]: value} : e
    )
    setEducations(updated);
  }
  
    return (
      <div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h3>Education {index + 1}</h3>
            <button
                onClick={() => deleteEducation(edu.id)}
                style={{ padding: '8px 12px', background: '#ff4444', color: 'white', borderRadius: '4px' }}
            >
                Delete
            </button>
        </div>
        <form>
          <label>
            Institution: 
            <input 
              type="text" 
              placeholder="University of "
              value={edu.institution}
              onChange={(e) => updateField('institution', e.target.value)}
              style={{display: 'block', margin: '10px 0', width: '95%'}}
             />
          </label>
          <label>
            Location of Institution: 
            <input 
              type="text" 
              placeholder="City, State"
              value={edu.field}
              onChange={(e) => updateField('field', e.target.value)}
              style={{display: 'block', margin: '10px 0', width: '95%'}}
             />
          </label>
          <label>
            Degree: 
            <input 
              type="text" 
              placeholder="Degree and field of study"
              value={edu.degree}
              onChange={(e) => updateField('degree', e.target.value)}
              style={{display: 'block', margin: '10px 0', width: '95%'}}
             />
          </label>
          <label>
            Date of Graduation: 
            <input 
              type="text" 
              placeholder="May 20XX"
              value={edu.gradDate}
              onChange={(e) => updateField('gradDate', e.target.value)}
              style={{display: 'block', margin: '10px 0', width: '95%'}}
             />
          </label>
        </form>
      </div>
    )
}
