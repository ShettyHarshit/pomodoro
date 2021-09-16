import { useEffect, useState } from "react";
import "./App.css";
import { Timer } from "./Timer";

const timer = Timer();

function App() {
  const [secondsLeft, setSecondsLeft] = useState(300);

  useEffect(() => {
    timer.init();
  }, []);

  return (
    <div className="App">
      Pomodoro Timer 🍅
      <br />
      {secondsLeft} 👀
      <br />
      <button onClick={() => timer.toggleTimer(setSecondsLeft)}>
        <span id="timer-button-label">Start</span>
      </button>
      <button onClick={() => timer.resetTimer(setSecondsLeft)}>
        {"Reset"}
      </button>
      <br />
    </div>
  );
}

export default App;
