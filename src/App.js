import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';
import io from 'socket.io-client'

function App() {
  const socket = io('localhost:5000');

  return (
    <BrowserRouter>
      <Routes socket={socket} />
    </BrowserRouter>
  );
}

export default App;
