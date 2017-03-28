import React, { Component } from 'react';
import Header from './Header';
import Pomodoro from './Pomodoro';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Pomodoro />
        <Footer />
      </div>
    );
  }
}

export default App;
