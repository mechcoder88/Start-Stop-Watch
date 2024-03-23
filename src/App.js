import './App.css';
import React, { useState } from "react"

let adjustInterval = undefined;
function App() {

  const [watch, setwatch] = useState(0);
  const [started, setStarted] = useState(false);

  const startWatch = () => {
    // * Re-Adjusting Interval
    adjustInterval = setInterval(() => {
      // setwatch(watch + 1); // ? Will Not Work bcoz here "watch" state will behave Asynchronously"
      setwatch((x) => x+1);
    }, 1000);
    setStarted(true);
  }

  const stopwWtch = () => {
    // * Clearing Interval
    clearInterval(adjustInterval);
    setStarted(false);
  }

  const resetWatch = () => {
    clearInterval(adjustInterval);
    setwatch(0);
    setStarted(false);

  }
  return (
    <>
      <div className="App">
        <h1>Start Stop Watch</h1>
        <h1>{watch}</h1>

        {/* Using Disabled here to stop user to do multiple clicks on Start button which will double triple the speed of timer */}
        <button className="start" disabled = {started} onClick={startWatch}>Start</button>
        <button className="stop" onClick={stopwWtch}>Stop</button>
        <button className="reset" onClick={resetWatch}>Restart</button>
      </div>
    </>
  );
}

export default App;
