import axios from "axios"
import { Component } from "react"
import '../../css/LoginSignup.scss'

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
        <h1>Welcome to the <span className="tearacker">T(EA)racker </span> family!</h1>
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