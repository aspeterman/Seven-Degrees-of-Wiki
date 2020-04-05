import React from 'react'
import {
BrowserRouter as Router,
// Switch,
Route,
Link,
// Redirect
} from "react-router-dom";
// import SevenStepsToKevinBacon from './components/index'
// import withAuth from './components/Auth/withAuth'
// import WikiGameHistory from './components/WikiGameHistory';
import WikiSetup from './components/WikiSetup';
// import WikiGameApp from './components/WikiGameApp'
import SearchList from './components/SearchList'
import Form from './components/Form'
import GetStarted from './components/GetStarted';
import Profile from './components/Profile'



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
    checkCount () {

        if(this.state.count > 7) alert('you lost')

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
  }



  componentDidMount() {

  //   // this.forceUpdate(console.log(this.state.count))
    this.setState({
      pageQueue: [],
      pageId: null,
      title: document.getElementById('origin').innerText,
      start: document.getElementById('origin').innerText
    })
  //   console.log(this.state.count)
  }




  render() {

    // this.checkCount()
    console.log(this.state)
    return (
      <Router>
      <span className="icn-logo"><i className="material-icons">
      <ul className="main-nav">
        {/* <li><Link to="/" activeStyle={{color: 'red'}}>Play</Link></li> */}
        <Link to="/solver">Solver</Link>
        <li><Link to="/">Start</Link></li>
        <li><Link to="/wiki/">Get Started</Link></li>
      </ul></i></span>
      <div>
        <Route path="/" exact component={WikiSetup} />
        <WikiSetup/>
        <Form onChange={this.addNewResult}  />
        <GetStarted />
        <Route path="/:handle" component={Profile }/>
      </div>
        <SearchList query={this.state.data} />
    </Router>




  )
  }
}

export default App;
