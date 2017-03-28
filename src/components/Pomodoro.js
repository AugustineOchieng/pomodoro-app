import React from 'react';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 1500,
      break: 300
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.countdown(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  countdown() {
    this.setState((prevState) => ({
      timer: prevState.timer - 1,
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
      </div>

    )
  }
}

export default Pomodoro;
