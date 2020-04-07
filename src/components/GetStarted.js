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
      page:'',
      isProcessing: false,
      count: 0,
      tracker: 0,
      start: '',
      end: ''
    };
    this.getLinks=this.getLinks.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderStartingPage = this.renderStartingPage.bind(this)
    this.restart=this.restart.bind(this)

  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("count"))
    localStorage.getItem("count") ? this.setState({count: this.userData.count+1, start: this.props.location.pathname.slice(6), end: this.userData.end}) : this.setState({count: 0, start: ''})
    this.handleChange()
    this.renderStartingPage()

}
componentDidUpdate(nextProps, nextState) {
  localStorage.setItem("count", JSON.stringify(nextState))
  if(this.state.start === this.state.end) {
    alert('you won!')
  }
  if(this.state.count > 7){
    this.setState({count: 0})
    alert('you lose')
  }
}
renderStartingPage = (e) => {
  if(this.props.location.pathname === '/') this.props.location.pathname = '/wiki/wikipedia'
  // this.setState({start: this.props.location.pathname.slice(6)})

  // const article = this.userData.start
  const article = this.props.location.pathname.slice(6)
    axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${article}`, {
      params: {
        origin: '*',
        headers: {"Access-Control-Allow-Origin": "*"}
      }
    })
    .then(response => response)
    .then(data => {
      const resData = Object.values(data.data.parse.text);
      this.setState({title: resData})
      console.log(resData[0])
      document.getElementById('content').innerHTML =  resData;
    }).catch(err => new TypeError(err))
  }



  getLinks() {
    var arr=[]
    var url = `https://en.wikipedia.org//w/api.php?action=query&format=json&prop=links&titles=${this.props.location.pathname.slice(6)}`
  axios.get(url, {
          params: {
      // datatype: 'jsonp',
      origin: '*',
      headers: {"Access-Control-Allow-Origin": "*"}
  }}).then(res=>res)
      .then(res=>res)
      .then(res =>{
        for(var i = 0; i < Object.values(res.data.query.pages)[0].links.length; i++){
          arr.push(Object.values(res.data.query.pages)[0].links[i].title)
      }
      }).catch(err=>new TypeError(err))
  }

  async handleChange() {
    this.setState({count: this.userData.count + 1})
  }

  handleClick =(e) => {
  const path = this.state.title
  console.log(this.state)
    axios.all([
      axios.get("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=mapdata%7Cpageviews&list=random&meta=&rnnamespace=0", {
      params: {
        // datatype: 'jsonp',
        origin: '*'
      }
    }),
    axios.get("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=mapdata%7Cpageviews&list=random&meta=&rnnamespace=0", {
      params: {
        origin: '*'
      }
    })
    ])
    .then(axios.spread((firstCall, secondCall) => {
      var start = firstCall.data.query.random[0].title
      this.props.location.pathname = '/wiki/' + start
      // document.getElementById('origin').innerHTML = start
      var end = secondCall.data.query.random[0].title
      this.setState({start: start, end: end})
    }))
  }

  restart = () => {
    this.setState({start: '', end: '', count: 0})
    this.renderStartingPage()
  }


  render(){
    const tracker = this.state.tracker
    const newCount = this.state.isProcessing ? this.tryConvert : tracker
    const start = this.state.start
    const end=this.state.end
    return(
      <div >
        <h2 id="article-head">Degrees of Bacon</h2>
        <div>
          <Button onClick={this.handleClick}>Generate</Button>
          <div id="origin">{start}</div>
          <div id="end">{end}</div>
          <Button color="primary" onClick={this.renderStartingPage}>Start</Button>
          <Button onClick={this.restart}>Restart</Button>
        </div>
          <div id="inter-links">
            {this.state.what.map(link=> <Button key={link} onClick={(e)=>console.log(e.target.innerText)}>{link}</Button>)}
            </div>
      <div id="content" ></div>
      <div id="wiki"></div>
    </div>
    )}
  }



export default withRouter(GetStarted)



