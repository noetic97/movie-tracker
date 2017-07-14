import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(e) {
    const key = e.target.name
    this.setState({[key]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.submitCreds(this.state)
    setTimeout(() => {
      if (this.props.successMsg) {
        this.props.history.push('/')
      }}, 1000);
  }

  render() {
    const errorClass = this.props.fetchErr ? "invalid-true" : "invalid-false"
    return (
      <div className="login-component">
        <form className="login-form"
              onSubmit={(e) => this.handleSubmit(e)}>
          <h1>Login</h1>
          <input type='email'
                 className="input-email"
                 placeholder='email'
                 value={this.state.email}
                 name='email'
                 onChange={(e) => this.handleChange(e)}/>
          <input type='password'
                 className="input-password"
                 placeholder='password'
                 value={this.state.password}
                 name='password'
                 onChange={(e) => this.handleChange(e)}/>
          <p style={{color: 'red'}}
             className={errorClass}>Invalid Email or Password</p>
          <button className="input-submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
