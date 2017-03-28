import React from 'react';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 15,
      break: 3
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
      <div>
        <div className="controls">
          <button onClick={this.incPomodoro} className="btn round-btn">+ P</button>
          <button onClick={this.decPomodoro} className="btn round-btn">- P</button>
          <button onClick={this.incBreak} className="btn round-btn">+ B</button>
          <button onClick={this.decBreak} className="btn round-btn">- B</button>
        </div>
        <div className="display-timer">
          <div>Pomodoro Timer</div>
          <div>{this.formatTime(this.state.timer)}</div>
          <div>{this.formatTime(this.state.break)}</div>
        </div>
        <div className="controls">
          <button onClick={this.startPomodoro} className="btn sq-button">Start Pomodoro!</button>
          <button onClick={this.pauseButton} className="btn sq-button">Pause</button>
          <button onClick={this.resetButton} className="btn sq-button">Reset</button>
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
