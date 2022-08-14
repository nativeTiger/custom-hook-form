import React from "react";
import { TextInput, SubmitInput } from "./input";

const SignInForm = ({
  email,
  phoneNumber,
  password,
  onChange,
  onSubmit,
  errors,
}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
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
      <SubmitInput value="Sign Up" />
    </form>
  );
};

export default SignInForm;
