import React from 'react';
import './App.css';

//import Navbar and routes
import Navbar from './components/Navbar'
import Routes from './routes'
import Org from './Org'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
