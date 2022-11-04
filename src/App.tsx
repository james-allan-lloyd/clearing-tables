import React, { useState } from 'react'
import { MainMenu } from './MainMenu'
import { RandomRun } from './RandomRun'

function App() {
  const [tableNumber, setTableNumber] = useState<number>()
  const [running, setRunning] = useState(false)

  return (
    <div className='font-mono text-green-300 content flex flex-col items-center justify-center p-4 h-screen bg-gradient-to-b from-slate-700 to-black'>
      <main className=''>
        {!running ? (
          <MainMenu
            onStart={(tableNumber) => {
              setRunning(true)
              setTableNumber(tableNumber)
            }}
          />
        ) : (
          <>
            <RandomRun tableNumber={tableNumber!} />
            <button onClick={() => setRunning(false)}>Back</button>
          </>
        )}
      </main>
    </div>
  )
}

export default App
