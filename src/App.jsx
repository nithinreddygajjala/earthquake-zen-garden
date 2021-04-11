import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
const App = () => {
  return (
    <Router>
    <h1>
      <HeaderComponent/>
    </h1>
    <Switch>
          <Route path="/profile/:userId" component={Profile}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

function HeaderComponent() {
  return <div><Header/><Profile/></div>
}

function Header() {
  return <Link to="/">Home</Link>;
}

function Profile({ match }) {
  console.log(match);
  return <Link to ="/profile/:userId">Profile</Link>
}

function Home() {
  return <div>This is Home Page</div>
}

export default App