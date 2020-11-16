import React from "react";
import "./QuizzAnswer.css";
export default function QuizzAnswer(props) {
  return (
    <div className="col-sm-6 col-md-6 text-center">
      <div
        onMouseOver={() => console.log("test")}
        onClick={props.onClick}
        // style={{ backgroundColor: props.bgColor }}
        //   onClick={this.boxClick1}
        className="mef-rep-quizz box"
      >
        {props.proposition}
      </div>
    </div>
  );
}
