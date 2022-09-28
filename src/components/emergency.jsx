import React from "react";
import woman from "../download.jpeg";


const Emergency = () => {
  return (
    <div className="message">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
          <h2>
            On the other side <br /> of{" "}
            <span style={{ color: "red" }}> the screen.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            facere. Sequi cupiditate facilis eveniet ipsum laboriosam est quam
            exercitationem, quibusdam culpa ipsa placeat nostrum pariatur illum
            ea reiciendis ratione eum unde inventore vel necessitatibus ad
            corrupti quasi hic. Numquam ducimus labore doloremque distinctio
            ipsum repellendus quisquam, alias vel.
          </p>
          <h4>
            <span style={{ color: "red" }}>Nine out of ten</span> for an
            ambulance aren't real emergencies
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            assumenda inventore, esse culpa porro nam quas error provident quia
            voluptatum officia repudiandae dignissimos molestias sunt? Sint,
            voluptas error.
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

export default Emergency;
