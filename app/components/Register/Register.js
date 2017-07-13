import React, { Component } from 'react'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordVerify: ''
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
        this.props.regCreds(this.state)}}>
        <input type='text'
               placeholder='name'
               value={this.state.name}
               name='name'
               onChange={(e) => this.handleChange(e)}/>
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
        <input type='password'
               placeholder='passwordVerify'
               value={this.state.passwordVerify}
               name='passwordVerify'
               onChange={(e) => this.handleChange(e)}/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Register;
