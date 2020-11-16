import React from "react";

export default function QuizzMessage(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <div className="mef-message">
            <h2>{props.message} </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
