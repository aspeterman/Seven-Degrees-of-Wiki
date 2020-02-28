import React, {Component} from 'react'
import axios from 'axios'

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
  }
  handleClick() {
    // (axios.get('https://en.wikipedia.org/wiki/Special:Random').then(result=>this.setState({val: result}))
    (axios.get('https://en.wikipedia.org/wiki/Special:Random').then(result=>console.log(result))
    .catch(err=>console.error(err))

  )}
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Random