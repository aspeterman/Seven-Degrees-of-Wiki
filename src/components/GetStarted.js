// import axios from 'axios'
// import React, {Component} from 'react'
var axios = require('axios')
var React = require('react');

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: ''
    };
    this.props = this.start
  }


  getStartingPage() {
    axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=mapdata&list=random", {
    params: {
      // action: '',
      datatype: 'json',
      // limit: 15,
      origin: '*'
    }
  })
  .then((resp) => {
    // this.props.onClick(resp.data);
    var start = resp.data.query.random[0].title
    document.getElementById('origin').innerHTML = start
  })
}

renderStartingPage() {
  axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&title=hello&text=%7B%7BProject%3ASandbox%7D%7D&prop=text&contentmodel=wikitext`, {
    params: {
      datatype: 'json',
      origin: '*'
    }
  })
  .then(response => response)
  .then(data => {
    const resData = Object.values(data.data.parse.text);
    console.log(resData);
    // console.log(data.data.parse.text)
    document.getElementById('app').innerHTML = `Starting at: ${resData}`;
  })
}
  render(){
    return(
      <div>
        <button onClick={this.getStartingPage}>Get Started</button>
        <button onClick={this.renderStartingPage}>Get Rendered</button>
      </div>
    )
  }
}
export default GetStarted