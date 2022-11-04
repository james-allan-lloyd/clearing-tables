import React from 'react'

export function MainMenu({ onStart }: { onStart: (tableNumber: number) => void }): JSX.Element {
  return (
    <div>
      <h1 className='font-medium font-mono text-xl text-green-300'>Table Clearer</h1>
      <div className='grid grid-cols-3 gap-4'>
        {Array.from(Array(12), (e, i) => {
          return (
            <button
              className='text-center text-black font-mono rounded bg-green-300 p-4'
              onClick={() => onStart(i + 1)}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}
