import React from "react";

function FormField({ label, type, name, value, onChange }) {
  const Component = type === "textarea" ? "textarea" : "input";
  return (
    <div>
      <label>
        {label}:
        <Component type={type} value={value} name={name} onChange={onChange} />
      </label>
    </div>
  );
}

export default FormField;
