import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./About"
import Profile from "./Profile"
import Portfolio from "./Portfolio"
import Header from "./Header"
import ContactForm from './ContactForm'
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
    <Header />
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/work">
                <Portfolio />
                </Route>
          <Route path="/profile">
                <Profile />
                </Route>
                <Route path="/contact">
                <ContactForm />
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
