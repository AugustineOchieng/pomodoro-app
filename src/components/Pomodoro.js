import React from 'react';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 1500,
      break: 300
    };

    // bind helpers i.e. allows use of 'this' for custom methods
    this.startPomodoro = this.startPomodoro.bind(this);
    this.countdownPomodoro = this.countdownPomodoro.bind(this);
    this.startBreak = this.startBreak.bind(this);
    this.countdownBreak = this.countdownBreak.bind(this);
    this.pauseButton = this.pauseButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.incPomodoro = this.incPomodoro.bind(this);
    this.decPomodoro = this.decPomodoro.bind(this);
    this.incBreak = this.incBreak.bind(this);
    this.decBreak = this.decBreak.bind(this);
  }

  startPomodoro() {
    clearInterval(this.pTimerID);
    this.pTimerID = setInterval(
      () => this.countdownPomodoro(),
      1000
    );
  }

  countdownPomodoro() {
    if (this.state.timer < 1) {
      clearInterval(this.pTimerID);
      this.playSoundBreak();
      this.startBreak();
      return;
    }
    this.setState((prevState) => ({
      timer: prevState.timer - 1
    }));
  }

  startBreak() {
    this.bTimerID = setInterval(
      () => this.countdownBreak(),
      1000
    );
  }

  countdownBreak() {
    if (this.state.break < 1) {
      this.playSoundWork();
      clearInterval(this.bTimerID);
      return;
    }
    this.setState((prevState) => ({
      break: prevState.break - 1
    }));
  }

  pauseButton() {
    clearInterval(this.pTimerID);
    clearInterval(this.bTimerID);
  }

  resetButton() {
    clearInterval(this.pTimerID);
    clearInterval(this.bTimerID);
    this.setState({
      timer: 1500,
      break: 300
    })
  }

  incPomodoro() {
    this.setState((prevState) => ({
      timer: prevState.timer + 60
    }));
  }

  decPomodoro() {
    this.setState((prevState) => ({
      timer: prevState.timer - 60
    }));
  }

  incBreak() {
    this.setState((prevState) => ({
      break: prevState.break + 60
    }));
  }

  decBreak() {
    this.setState((prevState) => ({
      break: prevState.break - 60
    }));
  }

  playSoundBreak() {
    document.getElementById('break').play();
  }

  playSoundWork() {
    document.getElementById('work').play();
  }


  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemain = Math.round(seconds % 60);
    return `${minutes}:${secondsRemain < 10 ? '0' : ''}${secondsRemain}`;
  }
 
  render() {
    return (
      <div className="pomodoro-wrapper">
        <div className="duration-controls-wrapper">
          <div>
            <p className="title">Pomodoro</p>
            <button onClick={this.incPomodoro} className="round-btn">+</button>
            <button onClick={this.decPomodoro} className="round-btn">-</button>
          </div>
          <div>
            <p className="title">Break</p>
            <button onClick={this.incBreak} className="round-btn">+</button>
            <button onClick={this.decBreak} className="round-btn">-</button>
          </div>
        </div>
        <div className="display-timer">
          <div className="timer">{this.formatTime(this.state.timer)}</div>
          <div className="timer">{this.formatTime(this.state.break)}</div>
        </div>
        <div className="timer-controls">
          <button onClick={this.startPomodoro} className="sq-button">Start</button>
          <button onClick={this.pauseButton} className="sq-button">Pause</button>
          <button onClick={this.resetButton} className="sq-button">Reset</button>
        </div>
        <div>
          <audio id="work" preload="auto" src="https://tinyurl.com/k6nb3zu"/>
          <audio id="break" preload="auto" src="https://tinyurl.com/mbyaqqf"/>
        </div>
      </div>

    )
  }
}

export default Pomodoro;
