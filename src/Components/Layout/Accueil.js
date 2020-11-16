import React, { Component } from "react";
// import { Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import history from "../../Navigation/History";


export default class Accueil extends Component {
  onNavigateQuizz() {
    history.push("/Quizz");
  }

  onNavigateSubmit() {
    history.push("/Submit");
  }

  onNavigateQuizzConfig() {
    history.push("/QuizzConfig");
  }


  render() {
    return (
      <>
      <div className="row d-flex ">
        <div className="text-center">
          <h2>Bienvenue sur Quizz Islam</h2>
          <h3>Apprenez l'islam à travers plus de 10000 questions !</h3>
        </div>

        <div className="text-center">
          <h3>
            Pour Ajouter une question choisissez la catégorie, puis titre de la
            question, puis 4 réponses possibles!
          </h3>
        </div>
        <div className="mef-btn-position col d-flex justify-content-center">
          <button onClick={this.onNavigateQuizzConfig} className="btn-primary">
            {" "}
            Configurer le quizz
          </button>
        </div>
        <div className="mef-btn-position col d-flex justify-content-center">
          <button onClick={this.onNavigateQuizz} className="btn-primary">
            {" "}
            Commencer le Quizz
          </button>
        </div>
        <div className="mef-btn-position col d-flex justify-content-center">
          <button onClick={this.onNavigateSubmit} className="btn-primary">
            {" "}
            Proposez une question
          </button>
        </div>
        </div>
      </>
    );
  }
}
