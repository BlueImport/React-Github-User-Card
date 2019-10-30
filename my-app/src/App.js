import React, { Component } from 'react';
import './App.css';
import User from './components/UserCard.js';
import Followers from './components/Followers';


function App() {

    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <User />
        <Followers />
      </div>
    )
  }
export default App;
