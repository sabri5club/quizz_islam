import React from "react";
export default function QuizzNext(props) {
  return (
    <>
      <p
        style={{
          fontSize: props.index === props.Quizzdata.length - 1 ? "larger" : "",
        }}
        onClick={props.boxNext}
      >
        {props.index === props.Quizzdata.length - 1
          ? "Terminer le Quizz "
          : "Passez à la question suivante"}
      </p>
    </>
  );
}
