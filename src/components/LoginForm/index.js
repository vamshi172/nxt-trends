// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false}

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess()
    } else {
      this.setState({showError: true})
    }
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showError} = this.state
    return (
      <div className="bg-login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="long"
        />
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="website-login"
            alt="website login"
          />
          <form onSubmit={this.submitForm}>
            <div className="username-container">
              <label htmlFor="name" className="username">
                USERNAME
              </label>
              <input
                placeholder="Username"
                name="name"
                className="input-user"
                type="text"
                value={username}
                onChange={this.onUsername}
              />
            </div>
            <div className="username-container">
              <label htmlFor="password" className="username">
                PASSWORD
              </label>
              <input
                placeholder="Password"
                name="password"
                className="input-user"
                type="password"
                value={password}
                onChange={this.onPassword}
              />
            </div>
            <button className="btn-style" type="submit">
              Login
            </button>
            {showError && <p className="alert">*Username is Not Found</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
