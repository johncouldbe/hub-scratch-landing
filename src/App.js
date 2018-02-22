import React, { Component } from 'react';
import './App.css';
import twitter from './twitter-logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>HubScratch</h1>
          <h3>The worlds first decentralized forum</h3>
          <p>Get notified when this thing drops.</p>
          <form>
            <input placeholder="coolkids@hubscratch.com" />
            <button>Hit me up</button>
          </form>
        </div>
        <p className="twitter-bait">
          <a href="https://twitter.com/johncouldbe" target="_blank">Follow the Maker on &nbsp; <img src={twitter} /></a>
        </p>
      </div>
    );
  }
}

export default App;
