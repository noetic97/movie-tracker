import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props)
  }

  handleBang() {
    console.log(this.props);
    this.props.logBang('BANG!')
  }

  render() {
    return (
      <section>
        THIS IS THE MOVIELIST COMPONENT
        <button
          className="sampleBtn"
          onClick={this.handleBang.bind(this)}
        >CLICK ME!</button>
      </section>
    )
  }
}

export default MovieList;
