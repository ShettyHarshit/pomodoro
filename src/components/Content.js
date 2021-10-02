import React, { useEffect, useState } from "react";
import { Timer } from "../Timer";
import "./styles.css";

const timer = Timer();

export default function Content() {
  const [secondsLeft, setSecondsLeft] = useState(300);

  useEffect(() => {
    timer.init();
  }, []);

  return (
    <div className="content-column">
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
