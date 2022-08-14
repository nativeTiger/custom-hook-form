import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../form/SignInForm";
import useForm from "../hooks/useForm";

const SignIn = () => {
  const initialStates = {
    email: "",
    phoneNumber: "",
    password: "",
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
        <h3 className="form__title">Sign In Form</h3>
      </div>
      <SignInForm
        initialStates={states}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
      <h5>
        Not a member?
        <span className="form__link-wrapper">
          <Link to="/signup" className="form__link">
            Register now
          </Link>
        </span>
      </h5>
    </div>
  );
};

export default SignIn;
