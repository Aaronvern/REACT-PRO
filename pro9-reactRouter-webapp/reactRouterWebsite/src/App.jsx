import { useState } from 'react'
import './App.css'
import { Footer, Header, Home } from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      
    </>
  )
}

export default App
