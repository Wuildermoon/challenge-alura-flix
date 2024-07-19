import React from "react";
import StyledFieldset from "./FormFieldset.styles";

const FormFieldset = ({
  tag,
  name,
  title,
  type,
  value,
  onChange,
  required,
  options,
  cols,
  rows,
}) => {
  const renderField = () => {
    switch (tag) {
      case "select":
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          >
            {options &&
              options.map((option) => (
                <option key={option.title} value={option.title}>
                  {option.title}
                </option>
              ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            cols={cols}
            rows={rows}
          />
        );
      case "checkbox":
      case "radio":
        return (
          <input
            type={tag}
            id={name}
            name={name}
            checked={value}
            onChange={onChange}
            required={required}
          />
        );
      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          />
        );
    }
  };

  return (
    <StyledFieldset>
      <label htmlFor={name}>{title}</label>
      {renderField()}
    </StyledFieldset>
  );
};

export default FormFieldset;
