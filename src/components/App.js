import React, { Component } from 'react';
import Header from './Header';
import Timer from './Timer';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Clock />
        <Timer />
      </div>
    );
  }
}

export default App;
