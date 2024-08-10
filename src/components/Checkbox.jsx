import React, { useState } from "react";

export default function Checkbox({ label, width, height }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="checkbox button"
      style={{
        width: width,
        height: height,
        backgroundColor: isChecked
          ? "var(--primary-container)"
          : "var(--secondary-container)",
        color: isChecked ? "var(--primary)" : "var(--secondary)",
      }}
      onClick={handleCheckboxChange}
    >
      <input
        type="checkbox"
        id={`checkbox-${label}`}
        checked={isChecked}
        // Remove the onChange handler
        onChange={() => {}}
      />
      <label htmlFor={`checkbox-${label}`}>{label}</label>
    </div>
  );
}
