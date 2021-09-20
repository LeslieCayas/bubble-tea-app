// default state is userLogin = true
// if true, render login form and use login axios request (post to sessions api)
// if button is clicked, set userLogin to false
// if false, render sign up form and use signup axios request (post to users api)
import axios from "axios"
import { Component } from "react"
import Login from "./Login"
import Signup from "./Signup"

class UserSignupLogin extends Component {
  state = {
    userLogin: true
  }

  componentDidMount() {
    this.getSession()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userName !== prevState.userName) {
      this.getSession()
    }
  }

  getSession = () => {
    axios.get('/api/sessions')
      .then(sessionInfo => {
        if (sessionInfo.data.userName) {
          this.setState({userName: sessionInfo.data.userName})
        }
      })
  }

  logOut = () => {
    axios.delete('/api/sessions')
      .then(() => {
        window.location = '/'
      })
  }

  handleClick = () => {
    this.setState({ userLogin: !this.state.userLogin })
  }

  render() {
    return (
      <div id="signupLogin">
        <span>Welcome {this.state.userName !== undefined && this.state.userName}</span>
        {this.state.userName && <button onClick={this.logOut}>Log Out</button>}
        {this.state.userLogin ? <Login /> : <Signup />}
        <button onClick={this.handleClick}>{this.state.userLogin ? "Sign Up" : "Login"}</button>
      </div>
    )
  }
}

export default UserSignupLogin