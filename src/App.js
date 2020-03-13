import React from 'react';
import './App.css';
import Header from './Navigation/Header';
import Routage from './Navigation/Routage';


function App() {
  return (
    <div className='container'>
      <Routage>
      <Header/>
      </Routage>
     
    </div>
  );
}

export default App;
