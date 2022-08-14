import { useState } from "react";

const useForm = (initialStates) => {
  const [states, setStates] = useState(initialStates);
  const [errors, setErrors] = useState({});

  const validateFieldValues = (fieldStates = states) => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    } = fieldStates;

    let tempErrors = { ...errors };

    "firstName" in fieldStates &&
      (tempErrors.firstName = firstName ? "" : "FirstName is required");

    "lastName" in fieldStates &&
      (tempErrors.lastName = lastName ? "" : "LastName is required");

    "email" in fieldStates &&
      (tempErrors.email =
        email &&
        (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
          ? ""
          : "Email must be valid"));

    "password" in fieldStates &&
      (tempErrors.password = password ? "" : "Password is required");

    "confirmPassword" in fieldStates &&
      (tempErrors.confirmPassword =
        (confirmPassword ? "" : "Confirm Password is required") ||
        (states.password !== confirmPassword ? "Password doesn't match" : ""));

    "phoneNumber" in fieldStates &&
      (tempErrors.phoneNumber =
        (phoneNumber ? "" : "Phone Number is required!") ||
        (/^9\d{9}$/.test(phoneNumber)
          ? ""
          : "Phone Number must be valid 10 digit which starts with 9!"));

    setErrors({ ...tempErrors });

    return (
      fieldStates === states &&
      Object.values(tempErrors).every((error) => error === "")
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStates((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateFieldValues({ [name]: value });
  };

  return { states, errors, handleChange, validateFieldValues };
};

export default useForm;
