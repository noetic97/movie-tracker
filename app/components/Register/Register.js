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
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text'
                 placeholder='Name'
                 value={this.state.name}
                 name='name'
                 onChange={(e) => this.handleChange(e)}/>
          <input type='email'
                 placeholder='Email'
                 value={this.state.email}
                 name='email'
                 onChange={(e) => this.handleChange(e)}/>
          <input type='password'
                 placeholder='Password'
                 value={this.state.password}
                 name='password'
                 onChange={(e) => this.handleChange(e)}/>
          <input type='password'
                 placeholder='Verify Password'
                 value={this.state.passwordVerify}
                 name='passwordVerify'
                 onChange={(e) => this.handleChange(e)}/>
          <p style={{color: 'red'}}
             className={errorClass}>This email has already been used</p>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Register;
