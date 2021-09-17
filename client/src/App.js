import './App.css';
import {useEffect, useState} from 'react'
import Navigation from './components/Navigation'
import ToggleSignUpLogin from './components/user_forms/ToggleSignUpLogin'
import UserDrinks from './components/drinks/UserDrinks'

function App() { 
  return (
    <div className="App">
      <Navigation />
      <ToggleSignUpLogin />
      <UserDrinks />
    </div>
  );
}

export default App;
