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
import Login from './components/Auth/Login'
import SearchList from './components/SearchList'
import Form from './components/Form'
import GetStarted from './components/GetStarted';
import SideBar from './components/SideBar'
import Child from './components/Child'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
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
      {/* <NavBar/> */}
      {/* <Form onChange={this.addNewResult} />
    <SearchList query={this.state.data} /> */}
      <Router>
    <header>
      <span className="icn-logo"><i className="material-icons">
      <ul className="main-nav">
        <li><Link to="/search" activeClassName="active">Search</Link></li>
        {/* <li><Link to="/" activeStyle={{color: 'red'}}>Play</Link></li> */}
        {/* <Link to="/solver">Solver</Link> */}
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/play">Get Started</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul></i></span>
      <Router path="/search" component={Form}>
        <Form onChange={this.addNewResult} />
        <SearchList query={this.state.data} />
      </Router>
      <Route path="/login" component={Login}/>
      <Route path="/play" component={SideBar}/>
      <Route path="/play" component={GetStarted}/>
      {/* <Route path="/#:id" component={GetStarted}/> */}
      <Route path="/" component={Profile}/>
      {/* <Route path="/solver" component={Solver}/> */}
      {/* <Route path="/wiki" component={SideBar}/> */}
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
