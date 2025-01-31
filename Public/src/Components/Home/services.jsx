import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  imageUploadRoute,
  getResumeRoute,
  jdUploadRoute,
} from "../../Utils/apiroutes";
import { useNavigate } from "react-router-dom";
import "../../Css/home.css";
import { Spinner } from "flowbite-react";

function Services() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [parsedJDText, setParsedJDText] = useState("");
  const [isResumeUpload, setIsResumeUpload] = useState(false);
  const [isJDUpload, setIsJDUpload] = useState(false);
  const [jdWordsCount, setJdWordsCount] = useState(false);
  const [analyzeLoader, setAnalyzeLoader] = useState(false);
  const [uploadLoader, setUploadLoader] = useState(false);

  // JD upload
  const handleJDUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const file = event.target.elements.jd.files[0];
    formData.append("jd", file);
    try {
      const response = await axios.post(jdUploadRoute, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setParsedJDText(response.data.processedText);
      setResponse(response.data.msg);
      setJdWordsCount(response.data.jdWordsCount);
      setIsJDUpload(true);
    } catch (error) {
      setError("Error uploading JD: " + error.message);
    }
  };

  // Upload Resumes
  const handleResumeUpload = async (event) => {
    setUploadLoader(true);
    event.preventDefault();
    const resumeFormData = new FormData();
    const resumeFiles = event.target.elements.resumes.files;

    for (let i = 0; i < resumeFiles.length; i++) {
      resumeFormData.append("resumes", resumeFiles[i]);
    }

    try {
      const response = await axios.post(imageUploadRoute, resumeFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      setResponse(response.data.msg);
      setIsResumeUpload(true);
      setUploadLoader(false);
    } catch (error) {
      setError("Error uploading files: " + error.message);
    }
  };

  // Analyze resumes
  const handleSubmit = async (event) => {
    if (isResumeUpload && isJDUpload) {
      setAnalyzeLoader(true);
      event.preventDefault();
      try {
        const response = await axios.post(getResumeRoute, {
          parsedJDText,
        });

        const data = response.data;
        const totalResumeCount = data.totalResumesCount;
        const matchedResumesCount = data.matchedResumesCount;
        const matchedResumes = data.matchedResumes;

        setAnalyzeLoader(false);
        navigate("/sort", {
          state: {
            matchedResumes,
            totalResumeCount,
            matchedResumesCount,
            jdWordsCount,
          },
        });
      } catch (error) {
        setResponse("Error searching resumes: " + error.message);
      }
    } else {
      setError("Plz upload JD and resume first");
    }
  };

  useEffect(() => {
    if (response) {
      setTimeout(() => {
        setResponse("");
      }, 2000);
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

  return (
    <>
      <div className="homeOuter">
        <div
          className="alertmsg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {response && (
            <div
              className="alert alert-success"
              style={{ width: "50%" }}
              role="alert"
            >
              {response}
            </div>
          )}
          {error && (
            <div
              className="alert alert-danger"
              style={{ width: "50%" }}
              role="alert"
            >
              {error}
            </div>
          )}
        </div>
        <div className="topcount">
          <h1>Upload Job Description here</h1>
          <form className="serviceForm" onSubmit={handleJDUpload}>
            <input type="file" name="jd" accept=".pdf" />
            <button className="analyzebtn" type="submit">
              Upload
            </button>
          </form>
        </div>
        <div className="lowercount">
          <h1>Upload Resume Files Here</h1>
          <form onSubmit={handleResumeUpload}>
            <input type="file" name="resumes" accept=".pdf" multiple />
            <button className="Uploadbtn" type="submit">
              {uploadLoader ? (
                <Spinner aria-label="Default status example" />
              ) : (
                <h6>Upload</h6>
              )}
            </button>
          </form>
        </div>
      </div>
      <button className="analyzebtn" onClick={handleSubmit}>
        {analyzeLoader ? (
          <Spinner aria-label="Default status example" />
        ) : (
          <h1>Analyze</h1>
        )}
      </button>
      <hr />
    </>
  );
}

export default Services;
