import React from "react";
import logo from "./images/slu-logo.png";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Cps  from "./cps";
import Projects from "./projects";
import Publications from "./publications";
import Projectmembers from "./project-members";

export default function App() {
  return (
    <Router>
    <div className="Homepage">
      <div className = "header-container">
      <img src={logo} className = "logo" alt="slu-logo"/>
      <p>COLLEGE OF ARTS AND SCIENCES<br/>Department of Computer Science</p>
      </div>
      <ul className="navbar">
        <li><NavLink to ='/'>CPS</NavLink></li>
        <li><NavLink to='/project-members'>Project Members</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/publications">Publications</NavLink></li>
      </ul>
      <div className="content">
      <Routes>      
        <Route exact path="/" element = {<Cps/>}/>
        <Route path="/project-members" element={<Projectmembers/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/publications" element={<Publications/>}/>  
      </Routes>         
      </div>
    </div>
    </Router>
    
  );
}

