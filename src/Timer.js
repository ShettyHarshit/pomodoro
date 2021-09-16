export function Timer() {
  function init() {
    Timer.timeRemaining = 300;
    Timer.timerPaused = true;
    Timer.timerRunning = false;
    Timer.timer = null;
    return Timer;
  }

  function getTimeRemaining() {
    return Timer.timeRemaining;
  }

  function startTimer(setSecondsLeft) {
    Timer.timerPaused = false;
    document.getElementById("timer-button-label").innerHTML = "Pause";
    Timer.timer = setInterval(function () {
      Timer.timeRemaining = Timer.timeRemaining - 1;
      setSecondsLeft(Timer.timeRemaining);
    }, 1000);
  }

  function pauseTimer() {
    Timer.timerPaused = true;
    document.getElementById("timer-button-label").innerHTML = "Start";
    Timer.timer = clearInterval(Timer.timer);
  }

  function toggleTimer(setSecondsLeft) {
    if (Timer.timerPaused) startTimer(setSecondsLeft);
    else pauseTimer();
  }

  function resetTimer(setSecondsLeft) {
    Timer.timer = clearInterval(Timer.timer);
    Timer.timeRemaining = 300;
    Timer.timerPaused = true;
    setSecondsLeft(Timer.timeRemaining);
  }

  return {
    timeRemaining: getTimeRemaining(),
    init,
    toggleTimer,
    resetTimer,
  };
}

export const timer = Timer();
