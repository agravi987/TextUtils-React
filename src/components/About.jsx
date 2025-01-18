import React from "react";

export default function About({ isDarkMode }) {
  return (
    <div className="container mt-5">
      <div className={`card ${isDarkMode ? " bg-dark text-white " : " "} `}>
        <div className={`card-header ${isDarkMode ? " bg-secondary  " : " "} `}>
          <h2>About Us</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">Welcome to our website!</h5>
          <p className="card-text">
            We are a team of passionate developers building amazing
            applications. This is a simple About page built with React and
            styled using Bootstrap.
          </p>
          <p className="card-text">
            Explore the different features of the site, and enjoy your visit!
          </p>
        </div>
      </div>
    </div>
  );
}
