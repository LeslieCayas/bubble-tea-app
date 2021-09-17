import './App.css';
import {useEffect, useState} from 'react'
import Navigation from './components/Navigation'
import Login from './components/user_forms/Login'
import ToggleSignUpLogin from './components/user_forms/ToggleSignUpLogin'

function App() { 
  return (
    <div className="App">
      <Navigation />
      <ToggleSignUpLogin />
    </div>
  );
}

export default App;
