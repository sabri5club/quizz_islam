import React from 'react'
import Reglement from '../TextDisplay/Reglement';
import Accueil from '../Components/Layout/Accueil';
import Connexion from '../Components/Layout/Connexion';
import Inscription from '../Components/Layout/Inscription';
import Header from './Header';
import Categorie from '../Components/Layout/Categorie';
import Quizz from '../Components/Quizz';
import Submit from '../Components/Submit';
import { Router, Route } from 'react-router-dom';
import history from './History';


export default function Routage() {
  return (


    <Router history={history}>
      <div>

        <Header></Header>



        <Route path='/Accueil' exact component={Accueil}></Route>

        <Route path='/Connexion' exact component={Connexion}></Route>
        <Route path='/Inscription' component={Inscription}></Route>
        <Route path='/Categorie' component={Categorie}></Route>
        <Route path='/Quizz' component={Quizz}></Route>
        <Route path='/Submit' component={Submit}></Route>

        <Route path='/regle_du_jeu' component={Reglement}></Route>

      </div>
    </Router>


  )
}
