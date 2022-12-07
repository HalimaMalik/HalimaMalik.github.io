import React from "react";
import img1 from "./images/flavio.png";
import img2 from "./images/holdener.jpg";
import img3 from "./images/reza.jpg";
import img4 from "./images/vasit.jpg";

export default function Projectmembers(){
    return (
      <div className="flexcontainer">
      <section>
        <h1>Project Members</h1>
        <p style={{ color: 'black', fontSize: 22, fontWeight: 'bold'}}>Faculty</p>
        <table className="tabletitle">
          <tr>
          <td><img src={img1} className = "people" alt="flavio-esposito"/>
          <p>Flavio Esposito<br/>
          (Principal Investigator)</p>
          </td>
          <td><img src={img2} className = "people" alt="ekaterina-holdener"/>
            <p>Ekaterina Holder<br/>
            (Co-Principal Investigator)</p>
          </td>
          <td><img src={img3} className = "people" alt="reza-tourani"/>
            <p>Reza Tourani<br/>
            (Co-Principal Investigator)</p>
          </td>                  
          </tr> 
          <tr>
          <td><img src={img4} className = "people" alt="vasit-sagan"/>
            <p>Vasit Sagan<br/>
            (Co-Principal Investigator)</p>
          </td> 
          </tr>  
        </table>
      </section>
      <aside>
      </aside>
        
    </div>
      );
}