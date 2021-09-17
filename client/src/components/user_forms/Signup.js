// render the form 
// form should run axios call onsubmit
// import React, {useState} from "react"
import axios from "axios"
import { Component } from "react"

// axios call should post to users 

class SignUp extends Component {

  state = {}

  signUp = event => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    axios.post('/api/users', data)
      .then(() => {
        window.location = '/'
      })
      .catch(error => {
        this.setState({ error: error.response.data.error })
      })
  }
  render() {
    return (
      <div id="login">
        {this.state !== {} && <span id="errors">{this.state.error}</span>}

        <form id="signUp" onSubmit={this.signUp}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign Up" />
        </form>
      </div>

    )

  }
}

export default SignUp