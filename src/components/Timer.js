import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();

    // bind helpers i.e. allows use of 'this' for custom methods
    this.pomodoroTimer = this.pomodoroTimer.bind(this);
    this.displayTimeLeft = this.displayTimeLeft.bind(this);
  }
 
  pomodoroTimer(seconds) {
    let countdown;
    const now = Date.now();
    const then = now + seconds * 1000;
    this.displayTimeLeft(seconds);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check and stop if countdown is at 0 seconds
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      // display the time
      this.displayTimeLeft(secondsLeft);
      // console.log(secondsLeft);
    }, 1000);
  }

  displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.round(seconds % 60);
    console.log({minutes, secondsLeft});
  }

  render() {
    return (
      <div className="default">Pomodoro Timer</div>
    )
  }
}

export default Timer;
