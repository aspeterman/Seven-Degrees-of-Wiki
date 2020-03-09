import axios from 'axios'
import React from "react";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router";
// import getRandom from './getRandom'
import countClicks from './countClicks'

  const renderStartingPage = () => {
    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${this.props.location.pathname.slice(1)}`, {
    axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('origin').innerText}`, {
      params: {
        // datatype: 'jsonp',
        origin: '*',
        headers: {"Access-Control-Allow-Origin": "*"}
      }
    })
    .then(response => response)
    .then(data => {
      const resData = Object.values(data.data.parse.text);


      document.getElementById('damn').innerHTML = resData;
      // ShowTheLocationWithRouter()
    })
    // countClicks()
  }


// import cheerio from 'cheerio'

// async function createPageChain(language, slug) {
//   const url = `https://${language}.wikipedia.org/w/api.php?action=parse&format=json&redirects=true&prop=text&page=${encodeURIComponent(
//     slug
//   )}`;
//   const response = await fetch(url);
//   if (!response.ok)
//     throw new Error(`Failed to fetch page "${slug}": ${response.statusCode}`);
//   const page = (await response.json()).parse;
//   if (!page) throw new Error(`Page not found: "${slug}"`);
//   return {
//     slug,
//     title: page.title,
//     id: page.pageid,
//     content: page.text["*"]
//   };
// }
// function getFirstLink(content) {
//   const $ = cheerio.load(content);
//   const links = $("p a")
//     .map((_, el) => $(el).attr("href"))
//     .toArray()
//     .filter(href => href.startsWith("/wiki") && href.indexOf(":") < 0);
//   return links.length && decodeURI(links[0].replace(/^\/wiki\//, ""));
// }

// async function renderStartingPage(language, start) {
//   const pages = [];
//   let nextPage = start;

//   while (true) {
//     console.log(nextPage);
//     pages.push(nextPage);
//     const page = await createPageChain(language, nextPage);
//     const firstLink = getFirstLink(page.content);
//     if (!firstLink || pages.indexOf(firstLink) >= 0) return pages;
//     nextPage = firstLink;
//   }
// }


export default renderStartingPage