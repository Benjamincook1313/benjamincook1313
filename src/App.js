import React, { useState } from 'react';
import './App.css';

function App() {

  const [turn, setTurn] = useState(true)
  const [boxes, setBoxes] = useState([1,2,3,4,5,6,7,8,9])

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
  <div className='box one'>{boxes[0]}</div>
        <div className='box two'>{boxes[1]}</div>
        <div className='box three'>{boxes[2]}</div>
        <div className='box four'>{boxes[3]}</div>
        <div className='box five'>{boxes[4]}</div>
        <div className='box six'>{boxes[5]}</div>
        <div className='box seven'>{boxes[6]}</div>
        <div className='box eight'>{boxes[7]}</div>
        <div className='box nine'>{boxes[8]}</div>
      </div>
    </div>
  );
}

export default App;
