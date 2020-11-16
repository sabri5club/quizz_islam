import React from "react";
import { FiShare2 } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

export default function QuizzCarte() {
  return (
    <>
      <div className="card mef-card-categories" style={{ width: "25rem" }}>
        <div
          style={{ backgroundColor: "rgb(75, 119, 78" }}
          className="card-header"
        ></div>
        <div className="card-body mef-card-categorie">
          <div className="row">
            <div className="col-9 col-sm-9 col-md-8 d-flex flex-row  ">
              <h4 className="card-title">Titre carte</h4>
            </div>
            <div className="col-3 col-sm-3 col-md-4 d-flex flex-row justify-content-end ">
              <FaRegHeart />
            </div>
          </div>
          <p className="card-text">
            Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.
            D'après 'Amr Ibn Moura Al Jouhni (qu'Allah l'agrée), un homme est
            venu vers le Prophète (que la prière d'Allah et Son salut soient sur
            lui) et a dit: J'ai attesté qu'il n'y a pas d'autre divinité qui
            mérite d'être adorée si ce n'est Allah et que tu es le Messager
            d'Allah, j'ai prié les cinq (1), j'ai donné la zakat sur mon argent
            et j'ai jeûné le ramadan. Le Prophète (que la prière d'Allah et Son
            salut soient sur lui) a dit alors: « Celui qui meurt sur cela sera
            avec les prophètes, les véridiques et les martyrs le jour de la
            résurrection comme cela; et il a rassemblé ses deux doigts (2); tant
            qu'il ne s'est pas mal comporté avec ses parents ». (Rapporté par
            Ahmed et authentifié par Cheikh Albani dans Sahih Targhib n°2515
          </p>
          <div className="row">
            <div className="col-9 col-sm-9 col-md-8 d-flex flex-row  ">
              <h6>Numéro : 7500</h6>
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
