import React, { useEffect, useRef, useState } from 'react'

export type EquationProps = {
  left: number
  right: number
  current: boolean
  onAnswerChanged: (answer: number) => void
}

export function Equation({ left, right, current, onAnswerChanged }: EquationProps): JSX.Element {
  const [answer, setAnswer] = useState<number | undefined>()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (current) inputRef.current?.focus()
  }, [inputRef, current])

  var correct: boolean | undefined
  if (!current && answer) {
    correct = answer === left * right
  }

  const updateAnswer = (value: string) => {
    const intValue = parseInt(value)
    if (isNaN(intValue)) setAnswer(undefined)
    else setAnswer(intValue)
  }

  const answerStyle = correct ? 'text-green' : 'text-red-700 line-through'

  return (
    <tr className='text-right text-green-500 text-4xl'>
      <td>
        {left} x {right}
      </td>
      <td className='px-4 py-1'>=</td>
      <td>
        {current ? (
          <input
            className='bg-slate-700 border border-green-300 rounded-lg w-20'
            // type='number'
            ref={inputRef}
            onChange={(evt) => updateAnswer(evt.target.value)}
            onKeyPress={(event) => {
              if (answer !== undefined && event.key === 'Enter') {
                onAnswerChanged(answer)
              }
            }}
          />
        ) : answer !== undefined ? (
          <div className='w-20 text-left'>
            <span className={answerStyle}>{answer}</span>
            {!correct ? <span className='ml-2 text-slate-500'>{left * right}</span> : ''}
          </div>
        ) : (
          ''
        )}
      </td>
    </tr>
  )
}
