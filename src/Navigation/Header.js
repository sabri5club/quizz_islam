import React from 'react'
import './Header.css'
import {Nav, Navbar, Button,Form, FormControl} from'react-bootstrap'
import { Link }  from 'react-router-dom';


 export default function Header() {
    return (
     
        <div>
      
             <Navbar className='mef-bg'>
    <p className="title-quizz">Quizz Islam</p>
    <Nav className="mr-auto">
      <Link to={'Accueil'}  className='mef-navlink'>Accueil</Link>
    <Link className='mef-navlink' to="/Categorie">Catégorie</Link>
      <Link className='mef-navlink' to="/regle_du_jeu">Explication règles du jeu</Link>
      
    </Nav>
    

    <Nav className="mr-auto-md">
    <Link className='mef-navlink' to="/Connexion">Connexion</Link>
      <Link className='mef-navlink' to="/inscription">Inscription</Link>
      </Nav>
  </Navbar>
        </div>
     
        
    )
}
