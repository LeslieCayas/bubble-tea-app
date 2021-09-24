import axios from "axios"
import { Component } from "react"

class Login extends Component {

  state = {}

  loginUser = event => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    axios.post('/api/sessions', data)
      .then(session => {
        if (session.data.error) {
          this.setState({ error: session.data.error })
        } else {
          window.location = '/your-drinks'
        }
      })
  }
  render() {
    return (
      <div id="login">
        <h1>Log Into Your <span className="tearacker">T(EA)racker </span> Account</h1>
        {this.state.error !== '' && <span id="errors">
          {this.state.error}</span>}

        <form id="login" onSubmit={this.loginUser}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Log in" />
        </form>
      </div>

    )

  }
}

export default Login