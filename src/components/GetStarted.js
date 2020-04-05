import axios from 'axios'
import React from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
class GetStarted extends React.Component {
  userData;

  constructor(props) {
    super(props);
    this.state= {
      what: [],
      title:'',
      isProcessing: false,
      count: 0,
      start: '',
      end: ''
    };
    this.getLinks=this.getLinks.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderStartingPage = this.renderStartingPage.bind(this)

  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("count"))
    localStorage.getItem("count") ? this.setState({count: this.userData.count, start: this.props.location.pathname.slice(6)}) : this.setState({count: 0, start: ''})
    this.handleChange()
    this.renderStartingPage()

}
componentDidUpdate(nextProps, nextState) {
  localStorage.setItem("count", JSON.stringify(nextState))
  this.getLinks()
  if(this.state.count > 7){
    this.setState({count: 0})
    alert('you lose')

  }
  // if(!currVal === prevVal) localStorage.setItem("counter", JSON.stringify(currVal))
  // console.log('update')
  // console.log(nextState)
}
  // static getDerivedStateFromProps(props, state) {
  //   return {start: state.start,
  //           end: state.end};
  // }

//   apiEndpoint = "https://en.wikipedia.org/w/wiki/"
// params = `action=parse&format=json&page=wiki`;
renderStartingPage = (e) => {
  // this.setState({count: this.state.count - 1})
  if(this.props.location.pathname === '/') this.props.location.pathname = '/wiki/wikipedia'
  this.setState({count: this.state.count, start: this.props.location.pathname.slice(6)})

  const article = this.props.location.pathname.slice(6)
  // const article = document.getElementById('origin').innerText
    axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${article}`, {
      params: {
        // datatype: 'jsonp',
        origin: '*',
        headers: {"Access-Control-Allow-Origin": "*"}
      }
    })
    .then(response => response)
    .then(data => {
      const resData = Object.values(data.data.parse.text);
      this.setState({title: resData})
      // console.log(resData )
      // document.getElementById('article-head').innerHTML = resData
      document.getElementById('content').innerHTML =  resData;
    }).catch(err => new TypeError(err))
    // .then(profile())
  }



  getLinks() {
    var arr=[]
    var url = `https://en.wikipedia.org//w/api.php?action=query&format=json&prop=links&titles=${this.props.location.pathname.slice(6)}`
  // return(
  axios.get(url, {
          params: {
      // datatype: 'jsonp',
      origin: '*',
      headers: {"Access-Control-Allow-Origin": "*"}
  }})
      .then(res=>res)
      .then(res=>res)
      .then(res =>{
        for(var i = 0; i < Object.values(res.data.query.pages)[0].links.length; i++){
          arr.push(Object.values(res.data.query.pages)[0].links[i].title)
      }
      this.setState({what: arr})
      })
      // .then(console.log(this.state))
      .catch(err=>new TypeError(err))
  }

   async handleChange() {
   await this.setState({count: this.userData.count + 1})
  //  await this.getPage()
  //  await     this.renderStartingPage()

  //  this.setState({count: this.count++})

}

handleClick =(e) => {
const path = this.state.title
console.log(this.state)
  axios.all([
    axios.get("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=mapdata%7Cpageviews&list=random&meta=&rnnamespace=0", {
    params: {
      // action: '',
      datatype: 'jsonp',
      origin: '*'
    }
  }),
  axios.get("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=mapdata%7Cpageviews&list=random&meta=&rnnamespace=0", {
    params: {
      // action: '',
      datatype: 'jsonp',
      origin: '*'
    }
  })
  ])
  .then(axios.spread((firstCall, secondCall) => {
    var start = firstCall.data.query.random[0].title
    this.props.location.pathname = '/wiki/' + start
    document.getElementById('origin').innerHTML = start
    var end = secondCall.data.query.random[0].title
    document.getElementById('end').innerHTML = end })
    )
  }


  render(){

    // console.log('get started')
    console.log(this.props)
    return(
<div >
      <h2 id="article-head">Degrees of Bacon</h2>
      <div>
          <Button onClick={this.handleClick}>Generate</Button>
        <div id="origin"></div>
        <div id="end">{this.props.end}</div>
        <Button size="small" color="primary" onClick={this.renderStartingPage}>
            Start
          </Button>
      </div>
          {/* <button onClick={this.getLinks}>Click</button> */}
          <div id="inter-links">
            {this.state.what.map(link=> <Button key={link} onClick={(e)=>console.log(e.target.innerText)}>{link}</Button>)}
            </div>
            {/* <button onClick={localStorage.clear()}>clear</button> */}
      <div id="content"onClick={this.handleChange}>{this.state.title[0]}</div>
      <div id="wiki"></div>
      {/* <div id="wiki">{this.state.title}</div> */}
</div>
    )}
  }



export default withRouter(GetStarted)



