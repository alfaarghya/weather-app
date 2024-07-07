// Spinner.js
import React from "react";
import "./Spinner.css"; // Import the CSS file for keyframes

const Spinner = () => {
  return (
    <div className="spinner center">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={`spinner-blade spinner-blade-${index + 1}`}
        ></div>
      ))}
    </div>
  );
};

export default Spinner;
