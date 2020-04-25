import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Route
        path="/boring-stuff"
        render={() => (
          <div>
            <div>
              <Link to="/">go to cool stuff</Link>
            </div>
            <div>
              <a href="/gatsby">go to gatsby part</a>
            </div>
          </div>
        )}
      /> */}
      <Route
        path="/"
        exact
        render={() => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <a className="App-link" href="/gatsby">
                Go to Gatsby app
              </a>
            </header>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
