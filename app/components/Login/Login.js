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
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.submitCreds(this.state)}}>
        <input type='email'
          placeholder='email'
               value={this.state.email}
               name='email'
               onChange={(e) => this.handleChange(e)}/>
        <input type='password'
               placeholder='password'
               value={this.state.password}
               name='password'
               onChange={(e) => this.handleChange(e)}/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Login;
