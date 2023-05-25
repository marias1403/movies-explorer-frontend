import React from 'react';

export function useFormWithValidation(initialData) {
  const [data, setData] = React.useState(initialData);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setData({...data, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  function resetForm() {
    setData({});
    setErrors({});
    setIsValid(false);
  }

  return { data, handleChange, errors, isValid, resetForm };
}
