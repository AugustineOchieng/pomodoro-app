import React, { Component } from 'react';
import Header from './Header';
import Pomodoro from './Pomodoro';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Pomodoro />
      </div>
    );
  }
}

export default App;
