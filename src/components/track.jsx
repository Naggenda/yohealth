import React from "react";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaAirbnb } from "react-icons/fa";
import woman from '../download.jpeg';

const Track = () => {
  return (
  <div className="track">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          
          <img src={woman} alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="user">
            user
          </div>
          <h2>
            Just a moment. <br /> keep <span style={{ color: "red" }}>Tracking</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim dolor quo dolores obcaecati.Ea velit nostrum eius ut
            necessitatibus! Commodi aut assumenda est dolorem odio suscipit
            placeat expedita.
          </p>
          
        
             <div className="card">
             <FaAirbnb className="icon"/>               
               <p className="small">
                 help is on the way:<br />
                 <small>naggendajoshua@gmail.com</small> 
               </p>
             </div>
             
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Track;
