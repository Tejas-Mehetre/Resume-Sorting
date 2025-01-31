import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/navbar";
import FirstCompo from "../Components/Home/hero";
import Dashboard from "../Components/Home/dashboard";
import Contact from "../Components/Home/contact";
import Services from "../Components/Home/services";
import "../Css/home.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const currentUser = localStorage.getItem("current-user");

  useEffect(() => {
    if (!currentUser) navigate("/signin");
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="scrollable">
        <section id="home" className="section">
          <FirstCompo />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="dashboard" className="section">
          <Dashboard />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default HomePage;
