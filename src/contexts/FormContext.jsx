import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        profile: '',
        message: '',
        // institution: '',
        // degree: '',
        // field: '',
        // gradDate: '',
    });

    const updateField = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateField }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within FormProvider');
    }
    return context;
}
