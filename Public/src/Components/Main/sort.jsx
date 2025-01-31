import React from "react";
import { useLocation } from "react-router-dom";

function Sort() {
  // Retrieve sorted data from location state
  const location = useLocation();
  const {
    matchedResumes,
    totalResumeCount,
    matchedResumesCount,
    jdWordsCount,
  } = location.state || { matchedResumes: [] };

  return (
    <div style={{ maxHeight: "800px", overflowY: "scroll", paddingBottom:'200px' }}>
      <h1
        style={{ fontSize: "40px", textAlign:'center', marginTop:'30px', fontWeight:'bold'}}
      >
        Resumes Matched to Your Job Description
      </h1>

      {matchedResumes.length > 0 ? (
        matchedResumes.map((resume, index) => (
          <div key={index}>
            <div style={{ marginTop: "40px", display:'flex', flexDirection:'column' }}>
              <div
                className="pdfdata"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginRight: "300px",
                  marginLeft: "300px",
                }}
              >
                <h2>{resume.resume.filename}</h2>
                <h2>
                  <span style={{fontWeight:'bold'}}>
                    {((resume.matchingWordsCount / jdWordsCount) * 100).toFixed(
                      2
                    )}% &nbsp;
                  </span>
                   accuracy
                </h2>
              </div>
              <object
                data={`data:application/pdf;base64,${resume.resume.pdfString}`}
                type="application/pdf"
                width="600"
                height="400"
                style={{
                  marginLeft:'30%',
                  border: "1px solid black",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
              >
                <p>PDF cannot be displayed.</p>
              </object>
            </div>
          </div>
        ))
      ) : (
        <p>No matched resumes found.</p>
      )}
    </div>
  );
}

export default Sort;
