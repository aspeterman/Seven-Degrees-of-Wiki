import axios from 'axios'
import ShowTheLocationWithRouter from '../components/location'
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

  const renderStartingPage = (props) => {


console.log(this.props)


    if(!document.getElementById('origin').textContent) alert('generate data first')
    else {

      var location = document.getElementById('origin').innerText
      window.location = location

    axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${window.location}`, {
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
  }}
export default renderStartingPage