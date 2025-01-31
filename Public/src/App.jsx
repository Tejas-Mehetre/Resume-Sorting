import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Sort from "./Components/Main/sort";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/sort" element={<Sort />} />
      </Routes>
    </BrowserRouter>
  );
}
