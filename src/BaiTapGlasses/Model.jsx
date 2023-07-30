import React from "react";

const Model = ({ glasses }) => {
  return (
    <div className="container">
      <div className="row p-4">
      <div className="col-6">
        <img
          className="img-fluid"
          style={{ height: 400, position: "relative" }}
          src="./Image/model.jpg"
          alt="..."
        />
        <div style={{
          position: "absolute",
          maxWidth: 300,
          top: 350,
          left: 294,
          textAlign: "left"
        }}>
          <p className="fw-bold fs-3">{glasses.name}</p>
          <p className="fw-bold fs-5">Price: <span style={{ color: "red" }}>{glasses.price}$</span></p>
          <p style={{ color: "blue" }}>{glasses.desc}</p>
        </div>
      </div>
      <div className="col-6" >
        <img
          className="img-fluid"
          style={{ height: 400,
             position: "relative", }}
          src="./Image/model.jpg"
          alt="..."
        />
        <div id="glass" >
          <img className="img-fluid" style={{
            position: "absolute",
            top: "230px",
            right: "356px",
            height: 55,
            width: 170,
            opacity: 0.6
          }} src={glasses.url2} alt="..." />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Model;
