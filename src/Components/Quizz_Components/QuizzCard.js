import React from "react";
import { FiShare2 } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { coran } from "../services/Coran";

export default function QuizzCard() {
  return (
    <>
      <div className="card mef-card-categories" style={{ width: "25rem" }}>
        {/* <img className="card-img-top" src="" ></img> */}
        <div
          style={{ backgroundColor: "rgb(75, 119, 78" }}
          className="card-header"
        ></div>
        <div className="card-body mef-card-categorie">
          <div className="row">
            <div className="col-9 col-sm-9 col-md-8 d-flex flex-row  ">
              <h4 className="card-title">{coran[0].sourates[0].nom_phonetique}</h4>
            </div>
            <div className="col-3 col-sm-3 col-md-4 d-flex flex-row justify-content-end ">
              <FaRegHeart />
            </div>
          </div>
          <p className="card-text">{coran[0].sourates[0].versets[5].text}</p>
          <div className="row">
            <div className="col-9 col-sm-9 col-md-8 d-flex flex-row  ">
              <h6>Numéro : {coran[0].sourates[0].position}</h6>
            </div>
            <div className="col-3 col-sm-3 col-md-4 d-flex justify-content-end ">
              <FiShare2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
