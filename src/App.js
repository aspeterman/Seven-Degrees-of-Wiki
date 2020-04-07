import React from 'react'
import {
BrowserRouter as Router,
Route,
Link,
} from "react-router-dom";
import SearchList from './components/SearchList'
import Form from './components/Form'
import GetStarted from './components/GetStarted';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      title: '',
      links: [],
      pageQueue: [],
      page: 'wikipedia'
    };




    this.normalizeData = (rawData) => {
      return rawData[1].map(function(title, index) {
        return {
          title: title,
          paragraph: rawData[2][index],
          link: rawData[3][index],
          // title: document.title
        }
      })
    }
    this.addNewResult = (queryResult) => {
      if(queryResult === null) {
        this.setState({data: []})
        return;
      }
      const searchResult = this.normalizeData(queryResult)
      this.setState({ data: searchResult });
      // this.setState({title: searchResult})
    }



  };


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
  }



  componentDidMount() {

  //   // this.forceUpdate(console.log(this.state.count))
    this.setState({
      pageQueue: [],
      pageId: null,
      // title: document.getElementById('origin').innerText,
      // start: document.getElementById('origin').innerText
    })
  //   console.log(this.state.count)
  }




  render() {

    // this.checkCount()
    // console.log(this.state)
    return (
      <Router>
      <span className="icn-logo"><i className="material-icons">
      <ul className="main-nav">
        {/* <Link to="/solver">Solver</Link> */}
        <li><Link to="/">Start</Link></li>
        <li><Link to="/wiki/">Get Started</Link></li>
        <li><Form onChange={this.addNewResult}  /></li>
      </ul></i></span>
      <div>
        {/* <Route path="/" exact component={WikiSetup} /> */}
        {/* <Route path="/:title" component={WikiGameHistory}/> */}
        {/* <Home/> */}
        <Route path="/" component = {GetStarted} />
        {/* <Route path="/:handle" component={Profile }/> */}
      </div>
        <SearchList query={this.state.data} />
    </Router>




  )
  }
}

export default App;
