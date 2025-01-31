import React from "react";

function Ranking() {
  const sortedData = JSON.parse(localStorage.getItem("SortedArray"));
  
  return (
    <div style={{ maxHeight: "800px", overflowY: "scroll" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Relevance Ranking of Resume
      </h1>
      {sortedData &&
        sortedData.status &&
        sortedData.matchedResumes.length > 0 &&
        sortedData.matchedResumes.map((resume, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <h2
                style={{
                  margin: "10px",
                  fontSize: "20px",
                  border: "3px solid black",
                  width: "200px",
                  padding: "5px",
                  backgroundColor: "#92C4ED",
                  borderRadius: "10px",
                  marginLeft: "100px",
                }}
              >
                {resume.resume.filename}
              </h2>
              <object
                data={`data:application/pdf;base64,${resume.resume.pdfString}`}
                type="application/pdf"
                width="600"
                height="400"
                style={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
              >
                <p>PDF cannot be displayed.</p>
              </object>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Ranking;
