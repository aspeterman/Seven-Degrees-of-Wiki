import {Button} from 'react-bootstrap'
var React = require('react');

const Home = (props) => {
  if(props.count >= 7) {
    return (
      <div>
        <p>you lost... do you want to play again?</p>
        <p >...or read a <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">random Wikipedia article</a></p>
        <Button onClick={props.handleClick}>Generate</Button>
          <div id="origin">{props.start}</div>
          <div id="end">{props.end}</div>
          <Button color="primary" onClick={props.renderStartingPage}>Start</Button>
          <Button onClick={props.restart}>Restart</Button>
      </div>
    )
  }
  return (
    <div >
      <Button onClick={props.handleClick}>Generate</Button>
      <Button color="primary" onClick={props.renderStartingPage}>Start</Button>
      <Button onClick={props.restart}>Restart</Button>
      <div id="origin">Current Page: {props.start}</div>
      <div id="end">Destination: {props.end}</div>
      <div>Moves Left: {7 - props.count}</div>
      <h1>{props.start}</h1>
      <div id="content" ></div>
    </div>
  )
}

export default Home;