// default state is userLogin = true
  // if true, render login form and use login axios request (post to sessions api)
// if button is clicked, set userLogin to false
  // if false, render sign up form and use signup axios request (post to users api)
  import { Component } from "react"
  import Login from "./Login"
  import Signup from "./Signup"

class UserSignupLogin extends Component {
  state = {
    userLogin: true
  }

  handleClick = () => {
    this.setState({userLogin: !this.state.userLogin})
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