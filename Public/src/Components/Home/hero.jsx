import React from "react";
import logo from "../../assets/logo.png";
import "../../Css/home.css";

function FirstCompo() {
  return (
    <>
      <div className="Fouter" style={{ display: "flex", flexDirection: "row" }}>
        <div className="flogo">
          <img style={{ height: "153px" }} src={logo} alt="" />
        </div>
        <div
          className="ftext"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1>Streamline Your Resume</h1>
          <h1 className="firsth1">Collection Process</h1>
          <p>Automatically filter resumes based on job descriptions</p>
          <a href="#services" className="button-link"><button>Get started</button></a>
        </div>
      </div>
      <hr />
    </>
  );
}

export default FirstCompo;
