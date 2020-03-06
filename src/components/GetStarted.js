// import axios from 'axios'
// import React, {Component} from 'react'
// import countClicks from '../helpers/countClicks'
// import renderStartingPage from '../helpers/renderPage'
// import getOne from '../helpers/getOne'
var axios = require('axios')
var React = require('react');
// var SideBar = require('./SideBar')
// var getRandom = require('../helpers/getRandom')
class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      isVisible: null,
      count: 7,
      result: [],
    };
    // this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
        window.onpopstate = function() { window.location.reload(); };

    this.setState({state: document.getElementById('origin').innerText})

    console.log(this.props.start)
    // getOne()
      var arr = []
    // var result = []
    // var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
    var apiEndpoint = "https://en.wikipedia.org/w/api.php"
    var params = `action=parse&format=json&page=${this.props.start}`;
    // var params = `action=parse&format=json&page=${document.getElementById('origin').innerText}`;


    axios.get(apiEndpoint + "?" + params + "&origin=*")
  // axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&list=alllinks%7Cquerypage&plnamespace=0&qppage=DisambiguationPages&page=wiki')
        .then(response => response)
        .then(data => {

          this.state.start === '' ? console.log('error') :
           data.data.parse.links.map(x=> arr.push(Object.values(x)))
          //  console.log(arr)
          //  result.push(arr.map(y=>y[2]))
           this.setState({result: arr.map(y=>y[2])})
  }).then((resp) => {
    // this.setState({start: this.props.start})
    // this.props.onChange(resp.data.parse.title);
  })
}
// handleClick (e) {
//   // e.preventDefault()
//   this.setState({start: e.target.href})
//   // this.forceUpdate()
//   console.log(this.state)
//       // countClicks()

// }

// sendData = () => {
//   // this.setState({state: document.getElementById('origin').innerText})
//   this.props.setStartPage(this.state.start);

// }

// handleClick = e => {
//   e.preventDefault()
//   this.setState({
//     // isVisible: e.currentTarget.dataset,
//     start: e.target.href,
//     count: this.count - 1
//   }, () => {
//     console.log(this.props)
//     // this.props.onChange(e.target.href); // check this
//   }

//   )}



  render(){
    // console.log(this.state)

    return(
      <div>

        <div id="sidebar">
            <span id="counter"></span>
        </div>
        <div id="wiki">
          <h1>{this.state.start}</h1>
          {this.state.result.map(links => {
            return(

            <ul>
              <li><a target="_blank" href={`https://www.wikipedia.com/api/w/api?action=parse&format=json&page=${links}`} >{links}</a></li>
              <li><a href={links} onClick={this.handleClick} value={this.props.start}>{links}</a></li>
            </ul>
            )
          })}
          {/* {this.state.result.map(links => {
            return(

            <ul> */}
              {/* <li><a target="#" href={`https://www.wikipedia.com/api/w/api?action=parse&format=json&page=${links}`} >{links}</a></li> */}
              {/* <li><a href={links} onClick={this.handleClick} value={this.state.start}>{links}</a></li>
            </ul>
            )
          })} */}
        </div>

      </div>
    )
  }

}
export default GetStarted