import { useState } from 'react'
import './App.css'

function getCurrentDateTime() {
  // Create a new Date object to get the current date and time
  var now = new Date();

  // Extract year, month, and day
  var year = now.getFullYear();
  var month = now.getMonth() + 1; // January is 0, so we add 1
  var day = now.getDate();

  // Extract hours, minutes, and seconds
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Format the date and time nicely (add leading zeros if necessary)
  var formattedDateTime =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day +
    " "

  // Return the formatted date and time
  return formattedDateTime;
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <h1>BASIC COUNTER</h1>
     <h4>counting since {getCurrentDateTime()} </h4>
     <h2>count = {count}</h2>
     <button  onClick={()=>{
      setCount(count + 1)
     }}>increase count</button>
     <br></br>
          <button onClick={()=>{
      setCount(count - 1)
     }}>decrease count</button>

    </>
  )
}

export default App
