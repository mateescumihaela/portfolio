import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./About"
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

class App extends React.Component {
state = {
  target: ""
}
render () {
  return (
    <main className="main-application-wrapper">
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/:target">
            <About />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
    </BrowserRouter>
  </main>
  )
}
}
export default App;
