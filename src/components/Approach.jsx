import React from "react";
import { FaBeer } from "react-icons/fa";

const Approach = () => {
  return (
    <div className="container">
      <div className="intro text-center">
        <h2>
          What we did <br />
          <span style={{ color: "red" }}>Our approach.</span>
        </h2>
        <p style={{ padding: "10px 150px 120px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          eaque ipsum ab itaque architecto non maiores cum placeat vero?
          Provident reiciendis facere veniam est similique incidunt quibusdam
          assumenda! Suscipit, ratione a perspiciatis cupiditate quo tempore
          laborum est voluptas, voluptatibus voluptate sunt culpa.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 card parent1">
          <div className="card child">
            <div className="icons">
              <FaBeer />
            </div>
            <h6>Green Monday</h6>
          </div>
          <div className="text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda possimus non autem enim animi, fugiat repellat nemo
              maiores facere consectetur suscipit vero sequi at delectus!
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 card parent2">
          <div className="card child">
            <div className="icons">
              <FaBeer />
            </div>
            <h6>Green Monday</h6>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              amet, alias quaerat, natus a impedit iusto recusandae distinctio
              qui, explicabo dolore. Sit reiciendis provident deleniti.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 card parent3">
          <div className="card child">
            <div className="icons">
              <FaBeer />
            </div>
            <h6>Green Monday</h6>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id
              recusandae aut tempore. Aliquid dolores dolorem temporibus. Sint
              corrupti quidem ipsa voluptatem eveniet vero itaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
