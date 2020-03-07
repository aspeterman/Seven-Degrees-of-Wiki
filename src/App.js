import React, {Component} from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
Link,
NavLink
} from "react-router-dom";
import { createBrowserHistory } from "history";
// import withAuth from './components/Auth/withAuth'
import WikiGameHistory from './components/WikiGameHistory';
import WikiSetup from './components/WikiSetup';
import SearchList from './components/SearchList'
import Form from './components/Form'
import GetStarted from './components/GetStarted';
import SideBar from './components/SideBar'
import Profile from './components/Profile'
import Auth from './components/Auth/components/App'

import WikiLinks from './components/WikiLinks'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      start: '',
      links: []
    };
    this.normalizeData = (rawData) => {
      return rawData[1].map(function(title, index) {
        return {
          title: title,
          paragraph: rawData[2][index],
          link: rawData[3][index]
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
    }
    this.setStartPage = (page) => {
      this.setState({start: page})
    }
  };


  history = createBrowserHistory();

  render() {
    return (
      <div className='container'>

      {/* //   <Router basename="/localhost:3001/wiki" forceRefresh={true}>
      //   <h1>Kevin Bacon's 7 Degrees of Freedom</h1>
      //   <SideBar />
      //   <Form onChange={this.addNewResult} />
      //   <SearchList query={this.state.data} />
      //   <GetStarted/>
      //   </Router>
      // </div> */}
      <div>

      <h2>Degrees of Kevin Bacon</h2>
      <Router>
      <div>
        <Route path="/" component={WikiSetup} />
        {/* <Route path="/:title" component={WikiGameHistory}/> */}
      </div>
    </Router>,
      <Router>
    <header>
      <span className="icn-logo"><i className="material-icons">
      <ul className="main-nav">
        <li><Link to="/search" activeClassName="active">Search</Link></li>
        {/* <li><Link to="/" activeStyle={{color: 'red'}}>Play</Link></li> */}
        {/* <Link to="/solver">Solver</Link> */}
        <li><Link to="/">Profile</Link></li>
        <li><Link to="/play">Get Started</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        {/* <li><Link to="/">Wikirace</Link></li>
        <li><Link to="/:title">History</Link></li> */}
      </ul></i></span>
      <Router path="/search" component={Form}>
        <Form onChange={this.addNewResult} />
        <SearchList query={this.state.data} />
      </Router>
      <Route path="/profile" component={Profile}/>
      <Route path="/" component={SideBar}/>
      <Route path="/play" component={GetStarted}/>
      <Route path="/login" component={Auth}/>
      <Route path="/" exact component={GetStarted}/>
      </header>

    </Router>

    {/* <SideBar props={this.state.start}/> */}
    {/* <GetStarted /> */}
    {/* <SideBar /> */}
      </div>
      </div>
  )
  }
}

export default App;
