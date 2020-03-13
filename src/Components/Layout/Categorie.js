import React from 'react'
import './Categorie.css'
import Image from 'react-bootstrap/Image'
import salat from '../../img/salat.jpg';

export default function Categorie() {
    return (
        <div>
            <div className='container'> 
                <div className='row'>
                    <div className='col-sm-4'>
                        
                    <div className='card '>
                    <div class="card-block">
                    <div className="card-title">
                            La prière
                            </div>
                   
                            <p>Affichage des catégories</p>
                                 <Image className="mef-salat" src={salat} roundedCircle />
                               <button className="mef-button">Commencer</button>
                   
                        </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='card '>
                    <div class="card-block">
                    <div className="card-title">
                            L'Unicité de Dieu
                            </div>
                   
                            <p>Affichage des catégories</p>
                                 <Image className="mef-salat" src={salat} roundedCircle />
                               <button className="mef-button">Commencer</button>
                        
                        </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='card'>
                    <div class="card-block">
                        <div className="card-title">
                            L'Aumone
                            </div>
                            <p>Affichage des catégories</p>
                            <Image className="mef-salat" src={salat} roundedCircle />
                               <button className="mef-button">Commencer</button>
                              
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='card'>
                        <div class="card-block">
                            <div className="card-title">
                            Le Pelerinage
                            </div>
                            <p>Affichage des catégories</p>
                            <Image className="mef-salat" src={salat} roundedCircle />
                            <button className="mef-button">Commencer</button>
                        </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='card'>
                    <div class="card-block">
                    <div className="card-title">
                            Le Ramadan
                            </div>
                            <p>Affichage des catégories</p>
                            <Image className="mef-salat" src={salat} roundedCircle />
                            <button className="mef-button">Commencer</button>
                        </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='card'>
                    <div class="card-block">
                        <div className="card-title">
                            Les Prophètes
                            </div>
                            <p>Affichage des catégories</p>
                            <Image className="mef-salat" src={salat} roundedCircle />
                            <button className="mef-button">Commencer</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                    <div className='card'>
                    <div class="card-block">
                    <div className="card-title">
                            Les Compagnons
                            </div>
                
                            <p>Affichage des catégories</p>
                            <Image className="mef-salat" src={salat} roundedCircle />
                            <button className="mef-button">Commencer</button>
                        </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='card'>
                    <div class="card-block">
                    <div className="card-title">
                            Le Coran
                            </div>
                            <p>Affichage des catégories</p>
                                 <Image className="mef-salat" src={salat} roundedCircle />
                            <button className="mef-button">Commencer</button>
                        </div>
                    </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='card'>
                    <div class="card-block">
                    <div className="card-title">
                            Les Hadiths
                            </div>
                            <p>Affichage des catégories</p>
                                 <Image className="mef-salat" src={salat} roundedCircle />
                               <button className="mef-button">Commencer</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
