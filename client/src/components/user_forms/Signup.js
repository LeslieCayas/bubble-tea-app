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
      .then(response => {
        if (response.data.error) {
          this.setState({ error: response.data.error })
        } else {
          window.location = '/your-drinks'
        }
      })
      .catch(error => {
        this.setState({ error: error.response.data.error })
      })
  }
  render() {
    return (
      <div id="login">
        <h1>Welcome to the T(EA)racker family!</h1>
        {this.state.error !== '' && <span id="errors">{this.state.error}</span>}

        <form id="signUp" onSubmit={this.signUp}>
          <input type="text" name="username" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign Up" />
        </form>
      </div>

    )

  }
}

export default SignUp