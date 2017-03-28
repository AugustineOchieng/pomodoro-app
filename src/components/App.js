import React, { Component } from 'react';
import Header from './Header';
// import Timer from './Timer';
import Clock from './Clock';
import Pomodoro from './Pomodoro';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Clock />
        <Pomodoro />
      </div>
    );
  }
}

export default App;
