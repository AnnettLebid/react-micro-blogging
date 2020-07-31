import React from "react";
import NavBar from "./components/Navbar/Navbar";
import PageView from "./components/PageView/PageView";
import UserProfile from "./pages/UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <PageView />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
