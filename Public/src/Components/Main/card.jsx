import React from "react";

function Card({ resume }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={resume.content}
          className="card-img-top"
          alt={resume.filename}
        />
        <div className="card-body">
          <h5 className="card-title">{resume.filename}</h5>
          <p className="card-text">
            Uploaded on: {}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
