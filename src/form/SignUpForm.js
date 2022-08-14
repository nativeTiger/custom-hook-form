import React from "react";
import { TextInput, SubmitInput } from "./input";

const SignUpForm = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
  confirmPassword,
  onChange,
  onSubmit,
  errors,
}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__group-wrapper">
        <div className="form__group">
          <label htmlFor="firstName" className="form__label">
            First Name*
          </label>
          <TextInput
            className="form__input"
            placeholder="Enter your First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            error={errors.firstName}
          />
        </div>
        <div className="form__group">
          <label htmlFor="lastName" className="form__label">
            Last Name*
          </label>
          <TextInput
            className="form__input"
            placeholder="Enter your Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            error={errors.lastName}
          />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="lastName" className="form__label">
          Email
        </label>
        <TextInput
          className="form__input"
          placeholder="Enter your Email"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          error={errors.email}
        />
      </div>
      <div className="form__group">
        <label htmlFor="phoneNumber" className="form__label">
          Phone Number*
        </label>
        <TextInput
          className="form__input"
          placeholder="Enter your Phone Number"
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          error={errors.phoneNumber}
        />
      </div>
      <div className="form__group">
        <label htmlFor="lastName" className="form__label">
          Password*
        </label>
        <TextInput
          className="form__input"
          placeholder="Enter your Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          error={errors.password}
        />
      </div>
      <div className="form__group">
        <label htmlFor="lastName" className="form__label">
          Confirm Password*
        </label>
        <TextInput
          className="form__input"
          placeholder="Confirm Password "
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          error={errors.confirmPassword}
        />
      </div>
      <SubmitInput value="Sign Up" />
    </form>
  );
};

export default SignUpForm;
