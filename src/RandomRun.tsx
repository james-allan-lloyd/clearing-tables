import React, { useEffect, useState } from 'react';
import { Equation } from './Equation';
export function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}



export function RandomRun({ tableNumber }: { tableNumber: number; }): JSX.Element {
  const [table, setTable] = useState<number[]>([]);
  const [currentEquation, setCurrentEquation] = useState(0);

  const handleAnswerChanged = (answer: number) => {
    setCurrentEquation(currentEquation + 1);
  };

  useEffect(() => {
    const orderedEntries = Array.from({ length: 10 }, (_, i) => i + 1);
    setTable(shuffleArray(orderedEntries));
  }, []);

  return <><p>Table is {tableNumber} </p>
    <table>
      <tbody>
        {table.map((entry, index) => (<Equation key={entry} left={tableNumber} right={entry} current={index === currentEquation} onAnswerChanged={handleAnswerChanged} />))}
      </tbody>
    </table>
  </>;
}
