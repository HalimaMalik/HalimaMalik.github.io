import React from "react";
import cps from "./cps";
import projects from "./projects";
import publications from "./publications";
import projectmembers from "./project-members";
import logo from "./slu-logo.png";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div className="Homepage">
      <div className = "header-container">
      <img src={logo} className = "logo" alt="slu-logo"/>
      <p>COLLEGE OF ARTS AND SCIENCES<br/>Department of Computer Science</p>
      </div>
      <div>
        <ul className="navbar">
          <li><NavLink to ="/">CPS</NavLink></li>
          <li><NavLink to="/project-members">Project Members</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/publications">Publications</NavLink></li>
        </ul>
      </div>
        
      <div className="content">
      <Routes>      
        <Route path="/" component={cps }/>
        <Route path="/project-members" component={projectmembers}/>
        <Route path="/projects" component={projects}/>
        <Route path="/publications" component={publications}/>  
      </Routes>         
      </div>
    </div>
    </Router>
    
  );
}

