import React from "react";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import woman from "../download.jpeg";

const Mark = () => {
  return (
    <div className="track">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>
              Just a moment. <br /> keep{" "}
              <span style={{ color: "red" }}>Tracking</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim dolor quo dolores obcaecati.Ea velit nostrum eius ut
              necessitatibus! Commodi aut assumenda est dolorem odio suscipit
              placeat expedita.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={woman} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mark;
