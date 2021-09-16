import './App.css';
import {useEffect, useState} from 'react'
import Navigation from './components/Navigation'
import Login from './components/Login'
function App() { 
  return (
    <div className="App">
      <Navigation />
      <Login />
    </div>
  );
}

export default App;
