import React from "react";
import { QuizzCards } from "./services/fakeCards";

import { IconContext } from "react-icons";

import QuizzCard from "./Quizz_Components/QuizzCard";

export default function Apprentissage() {
  return (
    <>
      <div className="row d-flex">
        <IconContext.Provider
          value={{ color: "#484848", className: "", size: 20 }}
        >
          <div className="col-md-12 d-flex flex-wrap justify-content-center  ">
            {QuizzCards.map((item, index) => (
              <div key={index}>
                <QuizzCard />
              </div>
            ))}
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}
