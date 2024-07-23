import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          className="block text-sm font-medium text-white mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full bg-gray-900 text-white border border-gray-700 rounded-lg p-2 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
