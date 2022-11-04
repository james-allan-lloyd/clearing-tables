import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css'
import { MainMenu } from './MainMenu'
import { RandomRun } from './RandomRun'

function App() {
  const [tableNumber, setTableNumber] = useState<number>()
  const [running, setRunning] = useState(false)

  return (
    <div className='App'>
      <header className='App-header'>
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
      </header>
    </div>
  )
}

export default App
