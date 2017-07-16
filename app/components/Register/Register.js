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

  handleSubmit(e) {
    e.preventDefault()
    this.props.regCreds(this.state)
    setTimeout(() => {
      if (this.props.successMsg) {
        this.props.history.push('/login')
      }}, 1000);
  }

  render() {
    const errorClass = this.props.fetchErr ? "invalid-true" : "invalid-false"
    return (
      <div className='register-component'>
        <form className="register-form" onSubmit={(e) => this.handleSubmit(e)}>
          <h1>Register</h1>
          <input type='text'
            className='input-name'
            placeholder='Name'
            value={this.state.name}
            name='name'
            onChange={(e) => this.handleChange(e)}/>
          <input type='email'
            className='input-email'
            placeholder='Email'
            value={this.state.email}
            name='email'
            onChange={(e) => this.handleChange(e)}/>
          <input type='password'
            className='input-password'
            placeholder='Password'
            value={this.state.password}
            name='password'
            onChange={(e) => this.handleChange(e)}/>
          <input type='password'
            className='input-password'
            placeholder='Verify Password'
            value={this.state.passwordVerify}
            name='passwordVerify'
            onChange={(e) => this.handleChange(e)}/>
          <p style={{color: 'red'}}
            className={errorClass}>This email has already been used</p>
          <input className='input-submit' type='submit'/>
        </form>
      </div>
    )
  }
}

export default Register;
