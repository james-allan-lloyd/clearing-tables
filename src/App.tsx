import React from 'react';
// import logo from './logo.svg';
import './App.css';

function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

const tableNumber = Math.floor(Math.random() * 10) + 1;
const orderedEntries = Array.from({length: 10}, (_, i) => i + 1);
const table = shuffleArray(orderedEntries)

type EquationProps = {
  left : number;
  right: number;
}

function Equation({left, right}: EquationProps) : JSX.Element {
  return <li>{left} x {right} = {left*right}</li>
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Table is {tableNumber} </p>
        <ul>
          {table.map(entry => (<Equation left={tableNumber} right={entry} />))}
        </ul>
      </header>
    </div>
  );
}

export default App;
