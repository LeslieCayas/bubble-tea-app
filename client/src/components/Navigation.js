import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Navigation() {
  return (
    <div id="navigation">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Your Drinks</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation