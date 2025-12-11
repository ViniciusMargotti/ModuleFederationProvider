import React from "react";
import "./ProviderComponent.css";

const Provider: React.FC = () => {
  return (
    <div className="container">
      <script src="https://unpkg.com/@mui/material@latest/umd/material-ui.development.js"></script>
      <div className="icon-container">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="logo-image"
        />
      </div>
      <h1 className="title">Hello Module Federation 2.0</h1>
      <label htmlFor="name">Name</label>
      <input type="text" />
    </div>
  );
};

export default Provider;
