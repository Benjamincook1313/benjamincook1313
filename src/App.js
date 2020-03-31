import React, { useState } from 'react';
import './App.css';

function App() {

  const [turn, setTurn] = useState('O')
  const [boxes, setBoxes] = useState([])

  const checker=()=>{
    let b = boxes
    if(b[0] === b[1] && b[0] === b[2]){
      setTurn(`${b[0]} Wins`)
    }else if(b[3] === b[4] && b[3] === b[5]){
      setTurn(`${b[3]} Wins`)
    }else if(b[6] === b[7] && b[6] === b[8]){
      setTurn(`${b[6]} Wins`)
    }else if(b[0] === b[4] && b[0] === b[8]){
      setTurn(`${b[0]} Wins`)
    }else if(b[2] === b[4] && b[2] === b[6]){
      setTurn(`${b[2]} Wins`)
    }else if(b[0] === b[3] && b[0] === b[6]){
      setTurn(`${b[0]} Wins`)
    }else if(b[1] === b[4] && b[2] === b[7]){
      setTurn(`${b[1]} Wins`)
    }else if(b[2] === b[5] && b[2] === b[8]){
      setTurn(`${b[2]} Wins`)
    }
    else{
      setTurn('Cats Game')
    }
  };

  const boxClicked=(i)=>{
    let insert = [...boxes]
    if(boxes[i] === 'O' || boxes[i] === 'X'){
      window.alert('choose a different box')
    }else{
      insert[i] = turn
      setBoxes(insert)
    }
    (turn === 'X')? setTurn('O'): setTurn('X')
  };

  return (
    <div className="App">
      <div className='top-bar'>
        <div className='top-item'>{`${turn}'s`} Turn</div>
        <button className='top-item' onClick={() => setBoxes(['', '', '', '', '', '', '', '', ''])}>Reset</button>
      </div>
      <div className='gamebox'>
      <div className='box one' onClick={() => boxClicked('0')}>{boxes[0]}</div>
        <div className='box two'onClick={() => boxClicked('1')}>{boxes[1]}</div>
        <div className='box three' onClick={() => boxClicked('2')}>{boxes[2]}</div>
        <div className='box four' onClick={() => boxClicked('3')}>{boxes[3]}</div>
        <div className='box five' onClick={() => boxClicked('4')}>{boxes[4]}</div>
        <div className='box six' onClick={() => boxClicked('5')}>{boxes[5]}</div>
        <div className='box seven' onClick={() => boxClicked('6')}>{boxes[6]}</div>
        <div className='box eight' onClick={() => boxClicked('7')}>{boxes[7]}</div>
        <div className='box nine' onClick={() => boxClicked('8')}>{boxes[8]}</div>
      </div>
    </div>
  );
}

export default App;
