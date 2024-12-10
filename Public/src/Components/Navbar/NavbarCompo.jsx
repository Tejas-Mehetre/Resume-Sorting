import React from "react";
import "./navbarCss.css";
import { useNavigate } from "react-router-dom";

function NavbarCompo() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear()
    navigate('/signin');
  }
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button onClick={handleClick}>Logout</button>
      </nav>
    </>
  );
}

export default NavbarCompo;
