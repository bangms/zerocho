import React, { Component } from 'react';

class Try extends Component {
  render () {
    return (
      <li>
        {this.props.index}
        <b> {this.props.value.fruit} </b> - {this.props.value.taste}
        <div>content 1</div>
        <div>content 2</div>
        <div>content 3</div>
        <div>content 4</div>
        <div>content 5</div>
        <div>content 6</div>
      </li> 
    )
  }
}

export default Try;
