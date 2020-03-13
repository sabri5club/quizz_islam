import React, { Component, Fragment } from 'react'
import './Quizz.css'


export default class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
            
                QuizzQuestion: 'Quel est le dernier prophète envoyée par Dieu ?',
                id: '1',
                categorie: 'Les prophètes',
                bgColor:'',
                goodAnswer : false
                
            },
        {
            
            FirstProposition: 'Le prophète Abraham',
            id: '1',
            categorie: 'Les prophètes',
            bgColor:'',
            goodAnswer : false
            
        },
        {
            
            SecondProposition : 'Le prophète Mohamed',
            id: '2',
            categorie: 'Les prophètes',
            bgColor:'',
            goodAnswer : false
            
        },
        {
            
            ThirdProposition : 'Le prophète Issa',
            id: '3',
            categorie: 'Les prophètes',
            bgColor:'',
            goodAnswer : false
            
        },
        {
            
            FourthProposition : 'Le prophète Jacob',
            id: '4',
            categorie: 'Les prophètes',
            bgColor:'',
            goodAnswer : false
            
        }
    ]

    }

    boxClick = (e) => {
        if (!this.state.goodAnswer) {
            this.setState({ bgColor: 'red' } )
        }
    }
      
  

   

    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <div className="mef-title-quizz">
                                <h2>{this.state[0].QuizzQuestion}</h2>
                                <div className='mef-cat-title'>
                                    <p>{this.state.categorie}</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='mef-lg1-quizz col-sm-6 text-center'>
                            <div style={{backgroundColor: this.state.bgColor}}  onClick={this.boxClick} className="mef-quest">
                                <h1>{this.state[1].FirstProposition}</h1>
                            </div>
                        </div>
                        <div className='mef-lg1-quizz col-sm-6 text-center'>
                            <div style={{backgroundColor: this.state.bgColor}}  onClick={this.boxClick} className="mef-quest">
                                <h1>{this.state[2].SecondProposition}</h1>
                            </div>
                        </div>


                    </div>
                    <div className='row'>
                        <div className='mef-lg2-quizz col-sm-6 text-center'>
                            <div style={{backgroundColor: this.state.bgColor}}  onClick={this.boxClick} className="mef-quest " >
                                <h1>{this.state[3].ThirdProposition}</h1>
                            </div>
                        </div>
                        <div className='mef-lg2-quizz col-sm-6 text-center'>
                            <div style={{backgroundColor: this.state.bgColor}}  onClick={this.boxClick} className="mef-quest">
                                <h1>{this.state[4].FourthProposition}</h1>
                            </div>
                        </div>


                    </div>
                   
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 text-center'>
                                <div className="mef-rep-quizz">
                                    <h2>Bonne réponse </h2>
                                </div>
                            </div>

                        </div>
                    </div>
              
                
                       
            

                </div>

            </>
        )
    }
}
