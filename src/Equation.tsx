import React, { useEffect, useRef, useState } from 'react';

export type EquationProps = {
  left : number;
  right: number;
  current: boolean;
  onAnswerChanged: (answer: number) => void;
}

export function Equation({ left, right, current, onAnswerChanged }: EquationProps): JSX.Element {

  const [answer, setAnswer] = useState<number | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (current)
      inputRef.current?.focus();
  }, [inputRef, current]);

  var correct: boolean | undefined;
  if (!current && answer) {
    correct = (answer === left * right);
  }

  const updateAnswer = (value: string) => {
    const intValue = parseInt(value)
    if(isNaN(intValue))
      setAnswer(undefined)
    else
      setAnswer(intValue)
  }

  const answerStyle: React.CSSProperties = (correct ? { color: 'green' } : { color: 'red', textDecoration: 'line-through' });

  return <tr>
    <td align='right'>{left} x {right}</td>
    <td>=</td>
    <td>
      {(current ?
        <input
          type="number"
          ref={inputRef}
          onChange={evt => updateAnswer(evt.target.value)}
          onKeyPress={event => {
            if (answer !== undefined && event.key === 'Enter') {
              onAnswerChanged(answer);
            }
          }} />
        : (answer !== undefined ? <> <span style={answerStyle}>{answer}</span> {!correct ? left * right : ''}</> : '')
      )}
    </td>
  </tr>;
}
