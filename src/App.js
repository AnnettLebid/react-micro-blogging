import React from "react";
import NavigationBar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import UserProfile from "./pages/UserProfile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Wrapper />
            <div>world</div>
          </Route>
          <Route path="/profile">
            <UserProfile />            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
