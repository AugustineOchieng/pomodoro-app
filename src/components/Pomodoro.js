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
 
  render() {
    return (
      <div>
        <div className="default">Pomodoro Timer</div>
        <div>{(this.state.timer)}</div>
        <div>{(this.state.break)}</div>
      </div>

    )
  }
}

export default Pomodoro;
