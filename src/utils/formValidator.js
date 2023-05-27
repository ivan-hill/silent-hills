import React, { useCallback } from "react";

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [checks, setChecks] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const check = target.value;
    setValues({ ...values, [name]: value });
    setChecks({...checks, [name]: check})
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newChecks = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setChecks(newChecks);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setChecks, setErrors, setIsValid]
  );

  return { values, setValues, checks, handleChange, errors, isValid, setIsValid, resetForm };
}
