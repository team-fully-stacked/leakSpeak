import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Navbar and routes
import Navbar from './components/Navbar'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
