import React from "react";
import woman from '../trends.png';

const Vision = () => {
  return (
    <div className="container">
      <div className="row vision">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h1>
            Our <br /> <span style={{ color: "red" }}>vision</span>
          </h1>
          <img src={woman} />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim dolor quo dolores obcaecati.
            <span style={{ color: "red" }}>Ea velit nostrum eius</span> ut
            necessitatibus! Commodi aut assumenda est dolorem odio suscipit
            placeat expedita.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim dolor quo dolores obcaecati.
            <span style={{ color: "red" }}>Ea velit nostrum eius</span> ut
            necessitatibus! Commodi aut
          </p>
          <p className="small">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            illum eos totam magni nulla porro accusamus deleniti debitis
            molestiae ut a asperiores placeat corrupti natus sit, voluptas
            numquam quod officiis! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Architecto tempore, voluptate modi laborum nulla
            ex magnam mollitia, autem, asperiores blanditiis voluptates labore
            temporibus iusto necessitatibus libero perspiciatis earum delectus
            enim.
          </p>
          <div className="row">
             <div className="card col-lg-4 col-md-4 col-sm-6">
               <p className="small">
                 i had an accident
               </p>
             </div>
             <div className="card col-lg-4 col-md-4 col-sm-6">
               <p className="small">
                 i have an
               </p>
             </div>
             <div className="card col-lg-4 col-md-4 col-sm-6">
               <p className="small">
                 I am feeling bad
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
