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

  render() {
    return (
      <div className="login-component">
        <form className="login-form"
          onSubmit={(e) => {
            e.preventDefault()
            this.props.submitCreds(this.state)
            setTimeout(
              ()=>{if (this.props.successMsg) {
                this.props.history.push('/')
              }}
            , 1000);

            
          }}
        >
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
          <button className="input-submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
