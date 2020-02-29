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

// async handleClick() {
//   axios.all([
//     axios.get("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=mapdata%7Cpageviews&list=random&meta=&rnnamespace=0", {
//     params: {
//       // action: '',
//       datatype: 'jsonp',
//       // limit: 15,
//       origin: '*'
//     }
//   }),
//   axios.get("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=mapdata%7Cpageviews&list=random&meta=&rnnamespace=0", {
//     params: {
//       // action: '',
//       datatype: 'jsonp',
//       // limit: 15,
//       origin: '*'
//     }
//   })
//   ])
//   .then(axios.spread((firstCall, secondCall) => {
//     var start = firstCall.data.query.random[0].title
//     document.getElementById('origin').innerHTML = start
//     var end = secondCall.data.query.random[0].title
//     document.getElementById('end').innerHTML = end })
//   )}

  // renderStartingPage() {
  //   if(!document.getElementById('origin').textContent) alert('generate data first')
  //   else {
  //   axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('origin').innerText}`, {
  //   // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&title=hello&text=%7B%7BProject%3ASandbox%7D%7D&prop=text&contentmodel=wikitext`, {
  //     params: {
  //       datatype: 'jsonp',
  //       origin: '*'
  //     }
  //   })
  //   .then(response => response)
  //   .then(data => {
  //     const resData = Object.values(data.data.parse.text);
  //     console.log(resData);
  //     document.getElementById('wiki').innerHTML = resData;
  //   })
  // }}

  render(){
    return(
      <div>
        {/* <button class="btn btn-info" onClick={this.handleClick}>Get Your Objective</button>
        <button class="btn btn-info" onClick={this.renderStartingPage}>Get Rendered</button> */}
        <div id="sidebar">
            <span id="counter"></span>
        </div>
        <div id="wiki" onClick={countClicks}></div>
      </div>
    )
  }
}
export default GetStarted