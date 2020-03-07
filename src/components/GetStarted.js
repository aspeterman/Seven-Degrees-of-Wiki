// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import renderStartingPage from '../helpers/renderPage'
import WikiApi from './WikiApi'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var axios = require('axios')
// var SideBar = require('./SideBar')
// var getRandom = require('../helpers/getRandom')
class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isVisible: null,
      count: 7,
      result: [],
    };
    this.handleClick = this.handleClick.bind(this)
  }

  addTitle(title) {
    var titles = this.props.location.state.titles;
    if (titles.indexOf(title) < 0) {
      this.props.history.push(title, { titles: titles.concat([title]) });
    }
  }  async componentDidMount() {

      var arr = []
    // var result = []
    var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
    var apiEndpoint = "https://en.wikipedia.org/w/api.php"
    var params = `action=parse&format=json&page=${this.props.history.location.pathname}`;
    console.log(this.props)
    // var params = `action=parse&format=json&page=${document.getElementById('origin').innerText}`;

  //   axios.get(apiEndpoint + "?" + params + "&origin=*")
  // // axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&list=alllinks%7Cquerypage&plnamespace=0&qppage=DisambiguationPages&page=wiki')
  //       .then(response => response)
  //       .then(data => {

  //         if(!this.state.start) console.log('error')
  //          data.data.parse.links.map(x=> arr.push(Object.values(x)))
  //         //  console.log(arr)
  //         //  result.push(arr.map(y=>y[2]))
  //          this.setState({result: arr.map(y=>y[2])})
  // }).then((resp) => {
  //   // this.setState({start: this.props.start})
  // })
  console.log(this.props.history.location.pathname)

}

// handleClick (e) {
//   // e.preventDefault()
//   this.setState({start: e.target.href})
//   // this.forceUpdate()
//   console.log(this.state)
//       // countClicks()

// }

sendData = () => {
  // this.setState({state: document.getElementById('origin').innerText})
  this.props.setStartPage(this.state.start);

}


 apiEndpoint = "https://en.wikipedia.org/w/api.php"
 params = `action=parse&format=json&page=${this.props.history.location.pathname}`;
componentDidUpdate() {
  // this.props.history.location.pathname = document.getElementById('origin').innerText;

  document.title = `You clicked ${this.state.count} times`;
  console.log(this.props)

  axios.get(this.apiEndpoint + "?" + this.params + "&origin=*")
// axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&list=alllinks%7Cquerypage&plnamespace=0&qppage=DisambiguationPages&page=wiki')
      .then(response => response)
      .then(data => {
        const resData = Object.values(data.data.parse.text);


        document.getElementById('wiki').innerHTML = resData;
        // ShowTheLocationWithRouter()
      })
}
handleClick =(e, slug) => {
  // console.log(props)
  // e.preventDefault()
  // document.getElementById('origin').innerHTML = props.location.pathname.slice(6).replace('_', ' ')
  console.log(this.props)
  // this.props.history.location.pathname.push(document.getElementById('origin').innerText)
  // renderStartingPage()
  // document.getElementById('origin').innerHTML = this.props.history.location.pathname

  slug=e.target.href
  // this.forceUpdate()
  e.persist()
  // history.push(document.getElementById('origin').innerText)

}
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
        if (this.state.title) {
      var link = {
        pathname: this.state.title,
        state: { titles: [this.state.title] },
      };
      return (
        <Link to={link}>
          <Button>Start with {this.props.location.pathname}</Button>
          {/* <Button>Start with {this.state.title}</Button> */}
        </Link>
      );
    } else {

    return(
      <div>


<button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
            <h1>{this.props.location.pathname}</h1>
            <button onClick={()=> this.setState({url: this.props.history.location.pathname})}>Location</button>
          <div id="wiki" onClick={this.handleClick}>
          {/* {this.state.result.map(links => {

            <ul>
              <li><a target="_blank" href={`https://www.wikipedia.com/api/w/api?action=parse&format=json&page=${links}`} >{links}</a></li>
              <li><a href={links} onClick={this.handleClick} value={this.props.match.url}>{links}</a></li>
            </ul>
          })} */}
        </div>
        </div>

    )}
  }

}
export default GetStarted