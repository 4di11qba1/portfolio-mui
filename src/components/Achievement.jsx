import React from "react";

export default function Achievement({ icon, desc }) {
  return (
    <div className="achievement">
      {icon}
      <p className="achievement-text">{desc}</p>
    </div>
  );
}
