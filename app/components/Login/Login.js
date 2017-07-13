import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  // handleInput() {
  //
  // }

  render() {
    return (
      <form>
        <input type='text'
               placeholder='name'
               value={this.state.username}/>
        <input type='text'
               placeholder='password'
               value={this.state.password}/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Login;
