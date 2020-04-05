var React = require('react');

const Home = (renderPage) => {
  // const renderPage = this.props.renderPage
  return (
    <div >
                    <p >...or read a <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">random Wikipedia article</a></p>

      <div id="end"></div>
      {/* <button onClick={renderPage}>Click Me</button> */}
    </div>
  )
}

module.exports = Home;