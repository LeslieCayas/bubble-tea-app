

// render the form 
// form should run axios call onsubmit
import React, {useState} from "react"
import axios from "axios"

// axios call should post to sessions 
function Login() {
  const [errorMessage, setErrorMessage] = useState({})

  const loginUser = event => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    axios.post('/api/sessions', data)
      .then(() => {
        window.location = '/'
      })
      .catch(error => {
        setErrorMessage({errorMessage: error.response.data.error})
        console.log(error.response.data.error)
      })
  }
  return (
    <div id="login">
      {/* {errorMessage !== '' && <span id="errors">Incorrect Email or Password</span>} */}
      <span id="errors">{errorMessage}</span>
      <form id="login" onSubmit={event => loginUser(event)}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Log in" />
      </form>
    </div>

  )
}

export default Login