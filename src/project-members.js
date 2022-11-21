import React from "react";
import img1 from "./images/flavio.png";
import img2 from "./images/holdener.jpg";
import img3 from "./images/reza.jpg";

export default function Projectmembers(){
    return (
      <div className="flexcontainer">
      <section>
        <h1>Project Members</h1>
        <table id="faculty">
          <p>Faculty</p>
          <tr>
            <td><img src={img1} className = "people" alt="flavio-esposito"/></td>
            <td>Flavio Esposito</td>
          </tr>
          <tr>
            <td><img src={img2} className = "people" alt="ekaterina-holdener"/></td>
            <td>Ekaterina Holder</td>
          </tr>
          <tr> 
            <td><img src={img3} className = "people" alt="reza-tourani"/></td>
            <td>Reza Tourani</td>
          </tr>
    
        </table>
      </section>
      <aside>
        <h2> Recent News</h2>
        <p>In the era of data sharing, it is still challenging, insecure, and time-consuming for scientists to share lessons learned from agricultural data collection and data processing. 
         The focus of this project is to mitigate such challenges by intersecting expertise in plant science, secure networked systems, software engineering, and geospatial science. </p>
      </aside>
        
    </div>
      );
}