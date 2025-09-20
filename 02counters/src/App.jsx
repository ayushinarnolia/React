import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1;
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
