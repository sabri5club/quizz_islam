import React from "react";
import { FaMedal, FaHeartBroken } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function QuizzFinish(props) {
  return (
    <>
      {props.heart > 1 ? (
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <IconContext.Provider
                value={{ color: "#DAA520", className: "mef-icon", size: 80 }}
              >
                <FaMedal />
              </IconContext.Provider>
            </div>

            <div className="mef-QuizzFinish col-sm-12 col-md-12 text-center">
              <h2>Félicitation !</h2>
            </div>
            <div className="mef-QuizzFinish col-sm-6 col-md-12 text-center ">
              <h2>
                Votre score finale est de :
                <span style={{ color: "rgb(75, 119, 78)" }}>
                  {" "}
                  {props.score}
                </span>
              </h2>
            </div>
            <div className="mef-QuizzFinish col-sm-6 col-md-12 w-25 text-center">
              <h2 className="mef-QuizzFinish.element">
                {" "}
                <span style={{ color: "rgb(75, 119, 78)" }}>
                  {" "}
                  {Math.round((props.score * 100) / (props.length * 5))} % Bonne
                  réponse
                </span>
              </h2>
            </div>
            <div className="mef-QuizzFinish col-sm-12 col-md-12 text-center">
              <button className="btn btn-primary" onClick={props.restart}>
                Rejouer ce Quizz
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <IconContext.Provider
                value={{ color: "black", className: "mef-icon", size: 80 }}
              >
                <FaHeartBroken />
              </IconContext.Provider>
            </div>

            <div className="mef-QuizzFinish col-sm-12 col-md-12 text-center">
              <h2>Plus de vie !</h2>
            </div>
            <div className="mef-QuizzFinish col-sm-6 col-md-12 text-center ">
              <h2>
                Votre score finale est de :
                <span style={{ color: "rgb(75, 119, 78)" }}>
                  {" "}
                  {props.score}
                </span>
              </h2>
            </div>
            <div className="mef-QuizzFinish col-sm-6 col-md-12 w-25 text-center">
              <h2 className="mef-QuizzFinish.element">
                {" "}
                <span style={{ color: "rgb(75, 119, 78)" }}>
                  {" "}
                  {Math.round((props.score * 100) / (props.length * 5))} % Bonne
                  réponse
                </span>
              </h2>
            </div>
            <div className="mef-QuizzFinish col-sm-12 col-md-12 text-center">
              <button className="btn btn-primary" onClick={props.restart}>
                Rejouer à ce Quizz
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
