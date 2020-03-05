// import axios from 'axios'
// import React, {Component} from 'react'
import countClicks from '../helpers/countClicks'
import renderStartingPage from '../helpers/renderPage'
import getOne from '../helpers/getOne'
var axios = require('axios')
var React = require('react');
var SideBar = require('./SideBar')
class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 'this',
      isVisible: null,
      count: 7,
      result: []
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // countClicks(this.state.start)
    getOne()
      var arr = []
    // var result = []
    // var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
    var apiEndpoint = "https://en.wikipedia.org/w/api.php"
    var params = `action=parse&format=json&page=${this.state.start}`;
    // var params = `action=parse&format=json&page=${document.getElementById('origin').innerText}`;
    // this.setState(start = document.getElementById('origin').innerText)


    axios.get(apiEndpoint + "?" + params + "&origin=*")
  // axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&list=alllinks%7Cquerypage&plnamespace=0&qppage=DisambiguationPages&page=wiki')
        .then(response => response)
        .then(data => {
          // const resData = Object.values(data.data.parse.text);
          // console.log(resData)
           data.data.parse.links.map(x=> arr.push(Object.values(x)))
          //  console.log(arr)
          //  result.push(arr.map(y=>y[2]))
           this.setState({result: arr.map(y=>y[2])})
  })
}
handleClick (e) {
  // e.preventDefault()
  this.setState({start: e.target.innerText})
  // this.forceUpdate()
  console.log(this.state)
}

// handleClick = e => {
//   this.setState({
//     isVisible: e.currentTarget.dataset,
//     count: this.count - 1
//   });
//   countClicks()
//   alert(this.state.isVisible);
// };



  render(){
    // console.log(this.state)

    return(
      <div>
        {/* <button class="btn btn-info" onClick={this.handleClick}>Get Your Objective</button>
        <button class="btn btn-info" onClick={this.renderStartingPage}>Get Rendered</button> */}
        <div id="sidebar">
            <span id="counter"></span>
        </div>
        <div id="wiki">
          <h1>{this.state.start}</h1>
          {this.state.result.map(links => {
            return(

            <ul>
              {/* <li><a target="#" href={`https://www.wikipedia.com/api/w/api?action=parse&format=json&page=${links}`} >{links}</a></li> */}
              <li><a href={links} onClick={this.handleClick} value={links}>{links}</a></li>
            </ul>
            )
          })}
        </div>

      </div>
    )
  }

}
export default GetStarted