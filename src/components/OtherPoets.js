import React from "react";
import "../styles/OtherPoets.css";

function OtherPoets(props) {
  return (
    <div className="poetInner col-lg-6 col-sm-12 col-md-12 ">
      <div className="card poetCard">
        <div class="card-body poetBody">
          <h4 class="card-title">{props.poet}</h4>
          <p class="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default OtherPoets;
