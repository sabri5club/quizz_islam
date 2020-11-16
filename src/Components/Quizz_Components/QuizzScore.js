import React from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function QuizzScore(props) {
  return (
    <>
      <IconContext.Provider
        value={{ color: "#DAA520", className: "mef-icon", size: 26 }}
      >
        <FaStar />
      </IconContext.Provider>
      <div className="mef-exp">
        <h3>{props.score}</h3>
      </div>
    </>
  );
}
