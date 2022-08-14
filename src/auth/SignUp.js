import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../form/SignUpForm";
import useForm from "../hooks/useForm";

const SignUp = () => {
  const initialStates = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const { states, errors, handleChange, validateFieldValues } =
    useForm(initialStates);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(validateFieldValues() ? states : errors);
  };

  return (
    <div className="form__container">
      <div className="form__title-wrapper">
        <h3 className="form__title">Sign Up Form</h3>
      </div>
      <SignUpForm
        initialStates={states}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
      <h5>
        Already a member?
        <span className="form__link-wrapper">
          <Link to="/" className="form__link">
            Sign In now
          </Link>
        </span>
      </h5>
    </div>
  );
};

export default SignUp;
