import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.first} {props.last}</h2>
      </div>
      <div className="card-body">
      <div className="text-center">
      <img alt={props.gender} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Gender: {props.gender}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.phone}</h3>
      <h3>City: {props.city}</h3>
    </div>
      </div>
    </div>
  );
}

export default Card;
