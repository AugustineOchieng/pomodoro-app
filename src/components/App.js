import React, { Component } from 'react';
import Header from './Header';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Timer />
      </div>
    );
  }
}

export default App;
