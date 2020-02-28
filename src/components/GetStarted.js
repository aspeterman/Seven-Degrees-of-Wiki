// import axios from 'axios'
// import React, {Component} from 'react'
var axios = require('axios')
var React = require('react');

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }
  getStartingPage() {
    axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=mapdata&list=random").then(res=>console.log(res))
      // this.setState({title:res})
  }
  render(){
    return(
      <div>
        <button onClick={this.getStartingPage}>Get Started</button>
      </div>
    )
  }
}
export default GetStarted