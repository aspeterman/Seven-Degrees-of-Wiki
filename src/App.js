import React, {Component} from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import withAuth from './components/Auth/withAuth'
import Login from './components/Auth/Login'
import Home from './components/Auth/Home'
import Secret from './components/Auth/Secret'
import SearchList from './components/SearchList'
import Form from './components/Form'
import GetStarted from './components/GetStarted';
import SideBar from './components/SideBar'
import Child from './components/Child'
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
      <Router>
      <h2>Degrees of Kevin Bacon</h2>
      <ul>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/">Play</Link></li>
        <li><Link to="/solver">Solver</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      <Route path="/#:id" component={GetStarted}/>
      <Route path="/wiki/#:id" component={GetStarted}/>
      {/* <Route path="/" component={SideBar}/> */}
      <Route path="/" component={GetStarted}/>
      <Route path="/profile" component={Profile}/>
    </Router>
    <Form onChange={this.addNewResult} />
    <SearchList query={this.state.data} />
    <SideBar start={this.state.start}/>
    <GetStarted start={this.state.start}/>
    {/* <SideBar /> */}
      </div>
      </div>
  )
  }
}

export default App;
