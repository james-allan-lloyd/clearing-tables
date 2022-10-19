import React, { useEffect, useRef, useState } from 'react';
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
  current: boolean;
  onAnswerChanged: (answer: number) => void;
}

function Equation({left, right, current, onAnswerChanged}: EquationProps) : JSX.Element {

  const [answer, setAnswer] = useState<number | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(current) inputRef.current?.focus();
  }, [inputRef, current])

  var correct: boolean | undefined;
  if(!current && answer)
  {
    correct = (answer === left * right);
  }

  const answerStyle : React.CSSProperties = (correct ? {color: 'green'} : {color: 'red', textDecoration: 'line-through'})

  return <li>
    {left} x {right} = 
    {(current ? 
      <input 
        type="number"
        ref={inputRef}
        disabled={!current}
        onChange={evt => setAnswer(parseInt(evt.target.value))}
        onKeyPress={event => {
          if (answer !== undefined && event.key === 'Enter') {
            onAnswerChanged(answer);
          }
        }} 
      />
      : (answer ? <> <span style={answerStyle}>{answer}</span> {!correct ? left * right: ''}</>: '')
    )}
  </li>
}

function App() {

  const [currentEquation, setCurrentEquation] = useState(0);

  const handleAnswerChanged = (answer: number) => {
    setCurrentEquation(currentEquation + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Table is {tableNumber} </p>
        <ul>
          {table.map((entry, index) => (<Equation key={entry} left={tableNumber} right={entry} current={index === currentEquation} onAnswerChanged={handleAnswerChanged}/>))}
        </ul>
      </header>
    </div>
  );
}

export default App;
