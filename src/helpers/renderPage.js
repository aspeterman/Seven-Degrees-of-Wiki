import axios from 'axios'
import ShowTheLocationWithRouter from '../components/location'
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import getLinks from './getLinks'

  const renderStartingPage = (props) => {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //     article : '',
    //     url: ''
    //   };
    // }


    if(!document.getElementById('origin').textContent) alert('generate data first')
    else {

// var rand = Math.floor(Math.random(arr.length))

    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${page}`, {
    axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('origin').innerText}`, {
    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&title=hello&text=%7B%7BProject%3ASandbox%7D%7D&prop=text&contentmodel=wikitext`, {
      params: {
        datatype: 'jsonp',
        origin: '*'
      }
    })
    .then(response => response)
    .then(data => {
      const resData = Object.values(data.data.parse.text);
      console.log(resData);


      document.getElementById('wiki').innerHTML = resData;
      // ShowTheLocationWithRouter()
    })
    .then(getLinks)
  }}
export default renderStartingPage