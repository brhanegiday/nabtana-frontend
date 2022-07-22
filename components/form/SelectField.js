import React from "react";

function SelectFiled({
  options,
  name,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  value,
  label,
  required,
  error,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-shark-900 text-sm dark:text-gray-400"
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        autoComplete={autoComplete}
        className="bg-white border-2 border-shark-400 text-shark-500 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
      >
        {options.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      {error && (
        <div className="text-xs font-light text-red-500 mt-1 ml-4">{error}</div>
      )}
    </div>
  );
}

export default SelectFiled;
