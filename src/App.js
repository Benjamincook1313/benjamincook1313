import React, { useState } from 'react';
import './App.css';

function App() {

  const [turn, setTurn] = useState('O')
  const [boxes, setBoxes] = useState([])

  function boxClicked(i){
    let insert = [...boxes].splice(i, 0, `${turn}`)
    if(boxes[i] === 'O' || boxes[i] === 'X'){
      window.alert('choose different box')
    }else{
      console.log(turn)
      setBoxes(insert)
      console.log(insert)
    }
    (turn === 'X')? setTurn('O'): setTurn('X')
  }

  return (
    <div className="App">
      <div className='top-bar'>
        <div className='top-item'>{turn? "O's": "X's"} Turn</div>
        <button className='top-item'>Reset</button>
      </div>
      <div className='gamebox'>
      <div className='box one' onClick={() => boxClicked('0')}>{boxes[0]}</div>
        <div className='box two' id='1' >{boxes[1]}</div>
        <div className='box three' id='2'>{boxes[2]}</div>
        <div className='box four' id='3'>{boxes[3]}</div>
        <div className='box five' id='4'>{boxes[4]}</div>
        <div className='box six' id='5'>{boxes[5]}</div>
        <div className='box seven' id='6'>{boxes[6]}</div>
        <div className='box eight' id='7'>{boxes[7]}</div>
        <div className='box nine' id='8'>{boxes[8]}</div>
      </div>
    </div>
  );
}

export default App;
