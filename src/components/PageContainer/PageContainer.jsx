import React from "react";
import "./PageContainer.css";

const PageContainer = ({ title, children }) => {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContainer;