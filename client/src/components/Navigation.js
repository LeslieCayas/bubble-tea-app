import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ToggleSignUpLogin from './user_forms/ToggleSignUpLogin'
import UserDrinks from './drinks/UserDrinks'
import CreateDrink from './drinks/CreateDrink'
import Home from './Home'

import React from 'react'

function Navigation() {
  return (
    <div id="navigation">
      <h1>T(EA)racker</h1>

      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/your-drinks'>Your Drinks</Link>
          <Link to='/create-drinks'>Create Drinks</Link>
          <Link to='/login-signup'>Login/Signup</Link>
        </nav>

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/about'></Route>
          <Route path='/your-drinks'><UserDrinks /></Route>
          <Route path='/create-drinks'><CreateDrink /></Route>
          <Route path='/login-signup'><ToggleSignUpLogin /></Route>
        </Switch>
      </Router>

    </div>
  )
}

export default Navigation