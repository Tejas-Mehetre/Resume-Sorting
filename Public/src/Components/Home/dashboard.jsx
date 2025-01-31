import React from "react";
import "../../Css/home.css";

function Dashboard() {
  return (
    <div className="dashouter">
      <div
        className="dashtitle"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <h1>Statistics Dashboard</h1>
      </div>
      <div className="dashcompo">
        <div className="fcompo">
          <p>Total Resumes</p>
          <h1>500</h1>
        </div>
        <div className="scompo">
          <p>Relevant Resumes</p>
          <h1>250</h1>
        </div>
      </div>
      <hr style={{marginTop:'60px'}} />
    </div>
  );
}

export default Dashboard;