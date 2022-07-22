import React from "react";

function TextArea({
  name,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  type,
  value,
  label,
  required,
  error,
  rows,
}) {
  return (
    <div>
      <label htmlFor={name} className="text-shark-900 text-sm">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
        value={value}
        className="inputElement"
        rows={rows}
      />
      {error && (
        <div className="text-xs font-light text-red-500 mt-1 ml-4">{error}</div>
      )}
    </div>
  );
}

export default TextArea;
