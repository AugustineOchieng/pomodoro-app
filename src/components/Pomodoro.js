import React from 'react';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 3,
      break: 300
    };

    // bind helpers i.e. allows use of 'this' for custom methods
    this.startPomodoro = this.startPomodoro.bind(this);
    this.countdownPomodoro = this.countdownPomodoro.bind(this);
  }

  startPomodoro() {
    this.timerID = setInterval(
      () => this.countdownPomodoro(),
      1000
    );
  }

  countdownPomodoro() {
    if (this.state.timer < 1) {
      clearInterval(this.timerID);
      return;
    }
    this.setState((prevState) => ({
      timer: prevState.timer - 1
    }));
  }

  countdownBreak() {
    this.setState((prevState) => ({
      break: prevState.break - 1
    }));
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemain = Math.round(seconds % 60);
    return `${minutes}:${secondsRemain < 10 ? '0' : ''}${secondsRemain}`;
  }
 
  render() {
    return (
      <div>
        <div className="default">Pomodoro Timer</div>
        <div>{this.formatTime(this.state.timer)}</div>
        <div>{this.formatTime(this.state.break)}</div>
        <div className="controls">
          <button onClick={this.startPomodoro} className="btn">Start Pomodoro!</button>
        </div>
      </div>

    )
  }
}

export default Pomodoro;
