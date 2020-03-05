// import axios from 'axios'
// import React, {Component} from 'react'
import countClicks from '../helpers/countClicks'
import renderStartingPage from '../helpers/renderPage'
var axios = require('axios')
var React = require('react');
var SideBar = require('./SideBar')
class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 'wikipedia',
      isVisible: null,
      count: 7,
      result: []
    };
  }

  componentDidMount() {
    // renderStartingPage(this.state.start)
    var arr = []
    var result = []
    // var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
    var apiEndpoint = "https://en.wikipedia.org/w/api.php"
    var params = `action=parse&format=json&page=${document.getElementById('origin').innerText}`;

    axios.get(apiEndpoint + "?" + params + "&origin=*")
  // axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&list=alllinks%7Cquerypage&plnamespace=0&qppage=DisambiguationPages&page=wiki')
        .then(response => response)
        .then(data => {
          // const resData = Object.values(data.data.parse.text);
          // console.log(resData)
           data.data.parse.links.map(x=> arr.push(Object.values(x)))
          //  console.log(arr)
           result.push(arr.map(y=>y[2]))
           this.setState({links: arr.map(y=>y[2])})
  })
}

// handleClick = e => {
//   this.setState({
//     isVisible: e.currentTarget.dataset,
//     count: this.count - 1
//   });
//   countClicks()
//   alert(this.state.isVisible);
// };

handleSearch = (event) => {
  // const fullUrl = event.target.value;
  // fullUrl = 'localhost:3001/' + this.state.start
  // this.setState({start: event.target.value});
  // let noSpaceText = event.target.value.replace(/\s/,'%20');
  // if(!noSpaceText) {
  //   this.props.onChange(null);
  //   return;
  // }
  // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${this.state.start}`, {
  //   params: {
  //       protocol: 'https',
  //       hostname: 'example.com',
  //       pathname: '/some/path',
  //       query: {
  //         page: 1,
  //         format: 'json'
  //       }

  //   }
  // })
  // .then((resp) => {
  //   // this.props.onChange(resp.data);
  //   console.log(resp.data)
  // })
  countClicks()
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
        <div id="wiki">
          {this.state.results.map(links => {
            return(

            <ul>
              <li>{links}</li>
            </ul>
            )
          })}
        </div>
      </div>
    )
  }
}
export default GetStarted