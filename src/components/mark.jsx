import React from "react";
import woman from "../download.jpeg";


const Mark = () => {
  return (
    <div className="message">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>
              Don't be scared. <br /> We've got you{" "}
              <span style={{ color: "red" }}>covered</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim dolor quo dolores obcaecati.Ea velit nostrum eius ut
              necessitatibus! Commodi aut assumenda est dolorem odio suscipit
              placeat expedita.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 image">
            <img src={woman} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Mark;
