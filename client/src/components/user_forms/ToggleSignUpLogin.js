import axios from "axios"
import { Component } from "react"
import Login from "./Login"
import Signup from "./Signup"
import '../../css/LoginSignup.scss'

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

  handleClick = () => {
    this.setState({ userLogin: !this.state.userLogin })
  }

  render() {
    return (
      <div id="signupLogin">
        {this.state.userLogin ? <Login /> : <Signup />}
        <button onClick={this.handleClick}>{this.state.userLogin ? "Sign Up" : "Login"}</button>
      </div>
    )
  }
}

export default UserSignupLogin