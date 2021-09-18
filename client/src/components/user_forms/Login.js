// render the form 
// form should run axios call onsubmit
// import React, {useState} from "react"
import axios from "axios"
import { Component } from "react"

// axios call should post to sessions 

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
          window.location = '/'
        }
      })
  }
  render() {
    return (
      <div id="login">
        {this.state.error !== '' && <span id="errors">
          {this.state.error}</span>}

        <form id="login" onSubmit={this.loginUser}>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Log in" />
        </form>
      </div>

    )

  }
}

export default Login