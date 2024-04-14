import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        

      </p>
    </>
  )
}

export default App
