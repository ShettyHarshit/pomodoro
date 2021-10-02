import React from "react";
import "./styles.css";

export default function IllustrationSidebar() {
  return (
    <div className="illustration-column">
      <div className="illustration-content">
        <img
          className="work-illustration"
          src={require("../illustrations/coding.svg").default}
          alt="illustration"
        />
        <h1>Plan Your Work And Stay Productive</h1>
      </div>
    </div>
  );
}
