import React from "react";

const TextInput = ({
  className,
  placeholder,
  type,
  name,
  value,
  onChange,
  error = null,
}) => {
  return (
    <>
      <input
        className={error ? `${className} form__input--error` : className}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
};

export default TextInput;
