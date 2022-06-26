import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  Login,
  Dashboard,
} from "./pages";
// import "./App.css";


const App = () => {
  return (
    <div>
      <BrowserRouter>

              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />

              </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
