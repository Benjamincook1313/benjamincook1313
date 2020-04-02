import React, { useState, useEffect } from 'react';
import './App.css';

function App() {


  const [turn, setTurn] = useState('O')
  const [boxes, setBoxes] = useState([ '', '', '', '', '', '', '', '', '',])
  const [counter, setCounter] = useState(0)
  const [active, setActive] = useState(true)

  useEffect(()=>{
    checker()
  });
  
  function checker(){
    const b = boxes
    if(b[0] !== '' && b[0] === b[1] && b[0] === b[2]){
      window.alert(`${b[0]} Wins`)
      setActive(false)
    }else if(b[3] !== '' && b[3] === b[4] && b[3] === b[5]){
      window.alert(`${b[3]} Wins`)
      setActive(false)
    }else if(b[6] !== '' && b[6] === b[7] && b[6] === b[8]){
      window.alert(`${b[6]} Wins`)
      setActive(false)
    }else if(b[0] !== '' && b[0] === b[3] && b[0] === b[6]){
      window.alert(`${b[0]} Wins`)
      setActive(false)
    }else if(b[1] !== '' && b[1] === b[4] && b[1] === b[7]){
      window.alert(`${b[1]} Wins`)
      setActive(false)
    }else if(b[2] !== '' && b[2] === b[5] && b[2] === b[8]){
      window.alert(`${b[2]} Wins`)
      setActive(false)
    }else if(b[0] !== '' && b[0] === b[4] && b[0] === b[8]){
      window.alert(`${b[0]} Wins`)
      setActive(false)
    }else if(b[2] !== '' && b[2] === b[4] && b[2] === b[6]){
      window.alert(`${b[2]} Wins`)
      setActive(false)
    }else if(counter === 9){
      window.alert('Cats Game')
      setActive(false)
    }else{
      return 
    };
  };
  
  const boxClicked=(i)=>{
    let insert = [...boxes]
    if(boxes[i] === "O" || boxes[i] === "X"){
      return window.alert('choose a different box')
    }else{
      insert[i] = turn
      setBoxes(insert)
      setCounter(counter+1)
    };
    if(counter !== 9 && active){
      turn === "X"?setTurn("O"): setTurn("X")
    }
  };

  return (
    <div className="App">
      <div className='top-bar'>
        <div className='top-item'>{`${turn}'s Turn`}</div>
        <button className='top-item' onClick={() => setBoxes([ '', '', '', '', '', '', '', '', '',])/setCounter(0)/setActive(true)}>Reset</button>
      </div>
      <div className='gamebox'>
      <div className='box one' onClick={active? () => boxClicked('0'): null}>{boxes[0].split("'").shift()}</div>
        <div className='box two'onClick={active? () => boxClicked('1'): null}>{boxes[1].split("'").shift()}</div>
        <div className='box three' onClick={active? () => boxClicked('2'): null}>{boxes[2].split("'").shift()}</div>
        <div className='box four' onClick={active? () => boxClicked('3'): null}>{boxes[3].split("'").shift()}</div>
        <div className='box five' onClick={active? () => boxClicked('4'): null}>{boxes[4].split("'").shift()}</div>
        <div className='box six' onClick={active? () => boxClicked('5'): null}>{boxes[5].split("'").shift()}</div>
        <div className='box seven' onClick={active? () => boxClicked('6'): null}>{boxes[6].split("'").shift()}</div>
        <div className='box eight' onClick={active? () => boxClicked('7'): null}>{boxes[7].split("'").shift()}</div>
        <div className='box nine' onClick={active? () => boxClicked('8'): null}>{boxes[8].split("'").shift()}</div>
      </div>
    </div>
  );
}

export default App;
