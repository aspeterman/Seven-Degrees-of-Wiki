// import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import renderStartingPage from '../helpers/renderPage'
// import generateRandom from '../helpers/getRandom'
// import WikiApi from './WikiApi'
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

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
  constructor(props) {
    super(props);
    this.state= {
      start: '',
      end: '',
      count: 8,
      isProcessing: false,
      pageQueue: []
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderStartingPage = this.renderStartingPage.bind(this)
    this.setCurrentTitle = this.setCurrentTitle.bind(this)
    this.addTitle = this.addTitle.bind(this)
  }
  static getDerivedStateFromProps(props, state) {
    return {start: props.start };
  }
  changeColor = () => {
    this.setState({start: this.props.location.pathname});
  }

  apiEndpoint = "https://en.wikipedia.org/w/wiki/"
params = `action=parse&format=json&page=wiki`;
renderStartingPage = (props) => {
  // this.setState({count: this.state.count - 1})
  const article = this.props.location.pathname.slice(6).replace('_', ' ')
    axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${article}`, {
      params: {
        // datatype: 'jsonp',
        origin: '*',
        headers: {"Access-Control-Allow-Origin": "*"}
      }
    })
    .then(response => response)
    .then(data => {
      console.log(this.props)
      const resData = Object.values(data.data.parse.text);
      document.getElementById('article-head').innerHTML = resData
      document.getElementById('content').innerHTML =  resData;
    })
    // .then(console.log(this.props.location.pathname.slice(6).replace('_', ' ')))
  }

  addTitle(title) {
    var pageQueue = this.props.pageQueue
    if (pageQueue.indexOf(title) < 0) {
      this.props.pageQueue.push(title, { pageQueue: pageQueue.concat([title]) });
    }
  }

  setCurrentTitle(title) {
    var pageQueue = this.props.pageQueue;
    var index = pageQueue.indexOf(title);
    this.props.pageQueue.push(title, { pageQueue: pageQueue.slice(0, index + 1) });
    // console.log(this.props.title)
  }
  componentDidMount() {
    console.log(this.props)
    // ReactDOM.findDOMNode(this).scrollIntoView();
if(this.props.location.pathname)  {

    // this.setState({start: this.props.location.pathname, end: document.getElementById('end').innerText})
    document.title = this.props.location.pathname
    if(document.title.slice(6) === '/wiki/') {

      // document.getElementById('origin').innerHTML = this.props.location.pathname.slice(6)
    }
    else document.getElementById('origin').innerHTML = this.props.title

this.handleChange()
}}


async handleChange() {
  await this.renderStartingPage()
}

handleClick =(e) => {

console.log(this.state)
  this.setState({start: document.getElementById('origin').innerText, end: document.getElementById('end').innerText})
  // this.props.location.pathname = 'https://localhost:3000/'+document.getElementById('origin').innerText.replace(' ', '_')
  // this.props.location.pathname = document.title


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
    // document.title=start;
    // document.getElementsByClassName('"articleselect-input').innerHTML = start
    var end = secondCall.data.query.random[0].title

    this.setState({start:start, end: end})
    document.getElementById('end').innerHTML = end })
    )
    // .then(  this.props.location.pathname = document.title      )
    .then(this.renderStartingPage(this.props.location.pathname.slice(6)))
  }


  render(){
    return(

<div width="50%">

       <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div flexBasis='33.33%'>
            <Typography fontSize="40">Starting Page</Typography >
          </div>
          <div flexBasis='33.33%'>
            <Typography >Destination</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails alignItems= 'center'>
          <div  >
          <div id="origin" ></div>
          </div>
          <div >
            <span id="end" />
          </div>
          <div flexBasis='33.33%'>
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
      <h2 id="article-head"></h2>
      <div id="content" width="50%" onClick={this.handleChange}></div>
</div>


    )}
  }



export default withRouter(GetStarted)



