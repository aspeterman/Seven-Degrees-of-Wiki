// import axios from 'axios'
import React from 'react'
// import renderStartingPage from '../helpers/renderPage'
// import generateRandom from '../helpers/getRandom'
// import WikiApi from './WikiApi'
import { withRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

var axios = require('axios')

// var SideBar = require('./SideBar')
class GetStarted extends React.Component {
  userData;

  constructor(props) {
    super(props);
    this.state= {
      start: '',
      end: '',
      title:[],
      isProcessing: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderStartingPage = this.renderStartingPage.bind(this)

  }
  static getDerivedStateFromProps(props, state) {
    return {start: 'wikipedia',
            end: 'Wiki' };
  }

//   apiEndpoint = "https://en.wikipedia.org/w/wiki/"
// params = `action=parse&format=json&page=wiki`;
renderStartingPage = (e) => {
  // this.setState({count: this.state.count - 1})
  if(this.props.location.pathname === '/') this.props.location.pathname = 'wikipedia'
  this.setState({count: this.count++})

  const article = this.props.location.pathname.slice(6)
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
      console.log(resData )
      // document.getElementById('article-head').innerHTML = resData
      document.getElementById('content').innerHTML =  resData;
    }).catch(err => new TypeError(err))
  }

  getPage() {
    const { handle } = this.props.match.params
    console.log(this.props)
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        headers: {"Access-Control-Allow-Origin": "*"},
        format: "json",
        titles: handle,
        prop: "links",
    };


    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
    var arr = []
    axios.get(url)
        .then(function(response){return response.json();})
        .then(function(response) {
            var pages = response.query.pages;
            for (var p in pages) {
                for (var l of pages[p].links) {
                  document.getElementById('app').innerHTML+=l.title
                    // console.log(l.title);
                    arr.push(l.title)
                }
            }
            return arr

          })
          .then(this.setState({links: arr}))
          .catch(err => new TypeError('couldnt get page'))
  }
  componentDidMount() {
    this.renderStartingPage()
    this.userData = JSON.parse(localStorage.getItem("count"))
    localStorage.getItem("count") ? this.setState({count: this.userData.count}) : this.setState({count: 0})
this.handleChange()

}
componentDidUpdate(nextProps, nextState) {
  localStorage.setItem("count", JSON.stringify(nextState))
  if(this.state.count > 7) alert('you lost')
  // if(!currVal === prevVal) localStorage.setItem("counter", JSON.stringify(currVal))
  console.log('update')
  console.log(nextState)
}

gameOver() {
  if(this.state.count > 7) {
    return (
      <h1>You Lost</h1>
    )
  }
}

 async handleChange() {
   await this.setState({count: this.userData.count + 1})
   await this.getPage()
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
    document.getElementById('origin').innerHTML = start
    path.push(start)
    var end = secondCall.data.query.random[0].title
    document.getElementById('end').innerHTML = end })
    )
  }




  render(){

    return(
<div width="50%">
<gameOver/>

       <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div flexbasis='33.33%'>
            <Typography fontSize="40">Starting Page</Typography >
          </div>
          <div flexbasis='33.33%'>
            <Typography >Destination</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div   alignitems= 'center'>
          <div id="origin" >{this.props.location.pathname}</div>
          </div>
          <div >
            <span id="end" />
          </div>
          <div flexbasis='33.33%'>
            <Typography variant="caption" >

              Start Your Kevin Bacon
              <br />
              <button   onClick={this.handleClick}>
                Generate
              </button>
            </Typography>
          </div>
        </ExpansionPanelDetails >
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" >Cancel</Button>
          <Button size="small" color="primary" onClick={this.renderStartingPage}>
            Start
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>

      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <ExpansionPanelDetails>

      <h2 id="article-head">Wikipedia Race</h2>
      <div id="content" width="50%" onClick={this.handleChange}>{this.state.title[0]}</div>
      <div id="wiki"></div>
          </ExpansionPanelDetails>
      </ExpansionPanelSummary>
      </ExpansionPanel>
</div>


    )}
  }



export default withRouter(GetStarted)



