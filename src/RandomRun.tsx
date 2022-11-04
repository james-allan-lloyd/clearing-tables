import format from 'format-duration'
import React, { useEffect, useState } from 'react'
import { Equation } from './Equation'

export function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function Timer({ startTime }: { startTime: number }): JSX.Element {
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setElapsedTime(Date.now() - startTime)
    }, 1000)

    return () => clearTimeout(timer)
  }, [elapsedTime, startTime])

  return <p>{format(elapsedTime)}</p>
}

export function RandomRun({ tableNumber }: { tableNumber: number }): JSX.Element {
  const [table, setTable] = useState<number[]>([])
  const [currentEquation, setCurrentEquation] = useState(0)
  const [startTime] = useState(Date.now())
  const [endTime, setEndTime] = useState<number>()

  const handleAnswerChanged = (answer: number) => {
    setCurrentEquation(currentEquation + 1)
    if (endTime === undefined && currentEquation === table.length - 1) {
      setEndTime(Date.now())
    }
  }

  useEffect(() => {
    const orderedEntries = Array.from({ length: 10 }, (_, i) => i + 1)
    setTable(shuffleArray(orderedEntries))
  }, [])

  return (
    <>
      <p>Table is {tableNumber} </p>
      {endTime === undefined ? <Timer startTime={startTime} /> : ''}
      <table>
        <tbody>
          {table.map((entry, index) => (
            <Equation
              key={entry}
              left={tableNumber}
              right={entry}
              current={index === currentEquation}
              onAnswerChanged={handleAnswerChanged}
            />
          ))}
        </tbody>
      </table>
      {endTime !== undefined ? <div>Done in {format(endTime - startTime)}</div> : ''}
    </>
  )
}
