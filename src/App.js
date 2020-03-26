import React, { useState } from 'react';
import './App.css';

function App() {

  const [turn, setTurn] = useState(true)
  const [boxes, setBoxes] = useState([])

  function turnToggler(){
    if(turn){
      return 'O'
    }
    return 'X'
  }

  return (
    <div className="App">
      <div className='top-bar'>
        <div className='top-item'>{turn? "O's": "X's"} Turn</div>
        <button className='top-item'>Reset</button>
      </div>
      <div className='gamebox'>
        <div className='left'></div>
        <div className='right'></div>
        <div className='top'></div>
        <div className='bottom'></div>
      </div>
    </div>
  );
}

export default App;
