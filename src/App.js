import React, { useState } from 'react';
import './App.css';

function App() {


  const [turn, setTurn] = useState("O's Turn")
  const [boxes, setBoxes] = useState([ '', '', '', '', '', '', '', '', '',])
  const [counter, setCounter] = useState(1)
  
  const checker=()=>{
    const b = boxes
    if(b[0] !== '' && b[0] === b[1] && b[0] === b[2]){
      setTurn(`${b[0]} Wins`)
    }else if(b[3] !== '' && b[3] === b[4] && b[3] === b[5]){
      setTurn(`${b[3]} Wins`)
    }else if(b[6] !== '' && b[6] === b[7] && b[6] === b[8]){
      setTurn(`${b[6]} Wins`)
    }else if(b[0] !== '' && b[0] === b[3] && b[0] === b[6]){
      setTurn(`${b[0]} Wins`)
    }else if(b[1] !== '' && b[1] === b[4] && b[1] === b[7]){
      setTurn(`${b[1]} Wins`)
    }else if(b[2] !== '' && b[2] === b[5] && b[2] === b[8]){
      setTurn(`${b[2]} Wins`)
    }else if(b[0] !== '' && b[0] === b[4] && b[0] === b[8]){
      setTurn(`${b[0]} Wins`)
    }else if(b[2] !== '' && b[2] === b[4] && b[2] === b[6]){
      setTurn(`${b[2]} Wins`)
    }else if(counter === 9){
      setTurn('Cats Game')
    }else{
      return 
    } 
  };
  
  const boxClicked=(i)=>{
    let insert = [...boxes]
    if(boxes[i] === "O's Turn" || boxes[i] === "X's Turn"){
      return window.alert('choose a different box')
    }else{
      insert[i] = turn
      setBoxes(insert)
      setCounter(counter+1)
    };
    if(counter !== 9){
      turn === "X's Turn"?setTurn("O's Turn"):setTurn("X's Turn")
    }
    console.log(counter)
    checker()
  };

  return (
    <div className="App">
      <div className='top-bar'>
        <div className='top-item'>{`${turn}`}</div>
        <button className='top-item' onClick={() => setBoxes([ '', '', '', '', '', '', '', '', '',])/setCounter(1)}>Reset</button>
      </div>
      <div className='gamebox'>
      <div className='box one' onClick={() => boxClicked('0')}>{boxes[0].split("'").shift()}</div>
        <div className='box two'onClick={() => boxClicked('1')}>{boxes[1].split("'").shift()}</div>
        <div className='box three' onClick={() => boxClicked('2')}>{boxes[2].split("'").shift()}</div>
        <div className='box four' onClick={() => boxClicked('3')}>{boxes[3].split("'").shift()}</div>
        <div className='box five' onClick={() => boxClicked('4')}>{boxes[4].split("'").shift()}</div>
        <div className='box six' onClick={() => boxClicked('5')}>{boxes[5].split("'").shift()}</div>
        <div className='box seven' onClick={() => boxClicked('6')}>{boxes[6].split("'").shift()}</div>
        <div className='box eight' onClick={() => boxClicked('7')}>{boxes[7].split("'").shift()}</div>
        <div className='box nine' onClick={() => boxClicked('8')}>{boxes[8].split("'").shift()}</div>
      </div>
    </div>
  );
}

export default App;
