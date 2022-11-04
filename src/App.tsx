import React, { useState } from 'react'
import { MainMenu } from './MainMenu'
import { RandomRun } from './RandomRun'

function App() {
  const [tableNumber, setTableNumber] = useState<number>()
  const [running, setRunning] = useState(false)

  return (
    <div className='content flex flex-col items-center p-4'>
      <main>
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
