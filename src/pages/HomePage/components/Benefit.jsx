import React from "react";
import "./Benefit.style.css";

export default function Benefit({ icon, content }) {
  return (
    <div className="benefitContainer">
      <div className="benefitIcon">
        <img className="benefitIconImage" />
      </div>
      <div className="benefitContent">{content}</div>
    </div>
  );
}
