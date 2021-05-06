import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header text-center">
        <h2>{props.first} {props.last}</h2>
      </div>
      <div className="card-body">
        <div className="text-center" >
          <img alt={props.gender} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
           <ul class="list-group">
              <li class="list-group-item">Gender: {props.gender}</li>
              <li class="list-group-item">Age: {props.age}</li>
              <li class="list-group-item">Email: {props.email}</li>
              <li class="list-group-item">Phone: {props.phone}</li>
              <li class="list-group-item">City: {props.city}</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
