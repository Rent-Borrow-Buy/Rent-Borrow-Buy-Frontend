import { useState } from 'react';

export function useForm(inputs = {}) {
  const [formState, setFormState] = useState({ ...inputs });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const clearForm = () => {
    for (let key in formState) {
      setFormState((prev) => ({ ...prev, [key]: '' }));
    }
  };

  return { formState, handleChange, clearForm };
}
