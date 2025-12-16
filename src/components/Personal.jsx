import { useForm } from "../contexts/FormContext";
import { TitleHead } from "./Layout";

export default function Personal() {
    const { formData, updateField } = useForm();
    return (
        <div>
            <TitleHead 
                title={"Personal Information"}
            />
            <form>
                <label>
                    Full Name:
                    <input 
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email"
                        placeholder="example-email@example.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                    />
                </label>
                <label>
                    Phone Number:
                    <input 
                        type="text"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                    />
                </label>
                <label>
                    Location:
                    <input 
                        type="text"
                        placeholder="City, State"
                        value={formData.location}
                        onChange={(e) => updateField('location', e.target.value)}
                    />
                </label>
                <label>
                    Online Profile:
                    <input 
                        type="text"
                        placeholder="linkedin.com"
                        value={formData.profile}
                        onChange={(e) => updateField('profile', e.target.value)}
                    />
                </label>
                <label>
                    Professional Summary:
                    <textarea 
                        type="text"
                        placeholder="Summary Statement"
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                    />
                </label>
            </form>
        </div>
    )
}
