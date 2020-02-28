// import axios from 'axios'
// import React, {Component} from 'react'
import countClicks from '../helpers/countClicks'
var axios = require('axios')
var React = require('react');
class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: ''
    };
  }

async handleClick() {
  axios.all([
    axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=mapdata&list=random", {
    params: {
      // action: '',
      datatype: 'jsonp',
      // limit: 15,
      origin: '*'
    }
  }),
  axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=mapdata&list=random", {
    params: {
      // action: '',
      datatype: 'jsonp',
      // limit: 15,
      origin: '*'
    }
  })
  ])
  .then(axios.spread((firstCall, secondCall) => {
    var start = firstCall.data.query.random[0].title
    document.getElementById('origin').innerHTML = start
    var end = secondCall.data.query.random[0].title
    document.getElementById('end').innerHTML = end })
  )}

  renderStartingPage() {
    axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('origin').innerText}`, {
    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&title=hello&text=%7B%7BProject%3ASandbox%7D%7D&prop=text&contentmodel=wikitext`, {
      params: {
        datatype: 'jsonp',
        origin: '*'
      }
    })
    .then(response => response)
    .then(data => {
      const resData = Object.values(data.data.parse.text);
      console.log(resData);
      document.getElementById('wiki').innerHTML = resData;
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Get Your Objective</button>
        <button onClick={this.renderStartingPage}>Get Rendered</button>
        <div>
          <span>Starting Point:</span>
          <span id="origin"></span>
        </div>
        <div>
          <span>Ending Point:</span>
          <span id="end"></span>
        </div>
        <span id="counter"></span>
        <div id="wiki" onClick={countClicks}></div>
      </div>
    )
  }
}
export default GetStarted