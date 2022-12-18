import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>

            <Route exact path="/General"
              element={<News key="general" pageSize={9} country="in" category="general" />}>
            </Route>

            <Route exact path="/Business"
              element={<News key="business" pageSize={9} country="in" category="business" />}>
            </Route>

            <Route exact path="/Entertainment"
              element={<News key="entertainement" pageSize={9} country="in" category="entertainment" />}>
            </Route>

            <Route exact path="/Health"
              element={<News key="health" pageSize={9} country="in" category="health" />}>
            </Route>

            <Route exact path="/Science"
              element={<News key="science" pageSize={9} country="in" category="science" />}>
            </Route>

            <Route exact path="/Sports"
              element={<News key="sports" pageSize={9} country="in" category="sports" />}>
            </Route>

            <Route exact path="/Technology"
              element={<News key="technology" pageSize={9} country="in" category="technology" />}>
            </Route>

          </Routes>
        </div>
      </Router>
    )
  }
}