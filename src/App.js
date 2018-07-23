import React, { Component } from 'react';
//import naszego komponentu + import w App ( <Tickers /> )
import Tickers from './components/Tickers.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ticker do krypto</h2>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;
