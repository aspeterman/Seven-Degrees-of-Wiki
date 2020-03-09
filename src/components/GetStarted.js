// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import renderStartingPage from '../helpers/renderPage'
import generateRandom from '../helpers/getRandom'
import WikiApi from './WikiApi'
import createPageChain from './getLinks'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
var axios = require('axios')
// var SideBar = require('./SideBar')
var getRandom = require('../helpers/getRandom')
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




  componentDidMount() {

      // document.title = document.getElementById('origin').innerText
      // renderStartingPage()
generateRandom()
  console.log(this.props)
  // document.title = this.props.match.params.title;
}

// handleClick (e) {
//   // e.preventDefault()
//   this.setState({start: e.target.href})
//   // this.forceUpdate()
//   console.log(this.state)
//       // countClicks()

// }


 apiEndpoint = "https://en.wikipedia.org/w/api.php"
 params = `action=parse&format=json&page=${this.props.match.params.title}`;
componentDidUpdate() {
  // this.props.history.location.pathname = document.getElementById('origin').innerText;
  // this.handleClick()
  document.title = `You clicked ${this.state.count} times`;
  if(this.state.count === 0) {
    alert('you failed!')
    this.setSetate({count: 7})
    generateRandom()
  }
    console.log(this.props)

  renderStartingPage()

}
handleClick =(e, slug) => {
document.getElementById('origin').innerHTML = this.props.match.params.title
renderStartingPage()

  console.log(this.props)
      document.title = this.props.match.params.title;

  }

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
<div >
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div >
            <Typography >Starting Page</Typography>
          </div>
          <div >
            <Typography >Destination</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <div  >
          {/* <div id="origin" >{props.link}</div> */}
          <div id="origin" >{this.props.match.params.title}</div>
          </div>
          <div >
            <span id="end" />
          </div>
          <div >
            <Typography variant="caption">
              Start Your Kevin Bacon
              <br />
              <a href="#secondary-heading-and-columns"  onClick={getRandom}>
                Generate
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" >Cancel</Button>
          <Button size="small" color="primary" onClick={this.handleClick}>
            Start
          </Button>


        </ExpansionPanelActions>
      </ExpansionPanel>








<button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
            <h1>{this.props.match.params.title}</h1>
            <button onClick={()=> this.setState({pathname: this.props.match.params.title, count: this.state.count - 1})}>Re-Render</button>
          <div id="wiki"  >
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