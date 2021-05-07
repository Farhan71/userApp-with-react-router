import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './Components/Main/Main';
import User from './Components/User/User';
import UserDetails from './Components/UserDetails/UserDetails';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/main"> 
            <Main></Main> 
          </Route>
          <Route path="/user">
            <User></User>
          </Route>
          <Route path="/details/:id">
            <UserDetails></UserDetails>
          </Route>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
