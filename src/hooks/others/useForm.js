import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [values, setValues, reset, handleInputChange];
};

export default useForm;
