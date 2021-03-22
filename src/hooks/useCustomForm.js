import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({ initalValues, onSubmit }) => {
  const [values, setValues] = useState(initalValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      setValues(initalValues);
      setErrors([]);
      setTouched({});
      setOnSubmitting(false);
      setOnBlur(false);
    }
    formRendered.current = false;
  }, [initalValues]);

  const handleBlur = (e) => {
    const { target } = e;
    const { name } = target;

    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    e.persist();
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ ...errors });
    onSubmit({ values, errors });
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useCustomForm;
