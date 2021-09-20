import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import ToggleSignUpLogin from './components/user_forms/ToggleSignUpLogin'
import UserDrinks from './components/drinks/UserDrinks'
import CreateDrink from './components/drinks/CreateDrink'

function App() { 
  return (
    <div className="App">
      <Navigation />
      <ToggleSignUpLogin />
      <UserDrinks />
      <CreateDrink />
    </div>
  );
}

export default App;
