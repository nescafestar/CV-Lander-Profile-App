import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Education from "./Components/Education";
import ProfExperience from "./Components/ProfExperience";
import Contact from "./Components/Contact";
import Introduction from "./Components/Introduction";
import "./styles.css";

export default function App() {
  return (
    <div id="container">
      <header>
        <div className="quoteoftheday">Profile</div>
        <div className="name">WJ.</div>
      </header>

      <article>
        <div className="quote">
          <h1>Everyones alive, but only some are living.</h1>
        </div>

        <div className="quoteby">
          <h4>Waleed Javed</h4>
        </div>
      </article>

      <footer>
        <Router>
          <div className="skills">
            <h6>Menu</h6>
            <ul>
              <li>
                <Link to="/Introduction">Introduction</Link>
              </li>
              <li>
                <Link to="/Education">Education</Link>
              </li>
              <li>
                <Link to="/ProfExperience">Prof. Experience</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Switching begans */}
          <Switch>
            <Route exact path="/Introduction">
              <div className="content">
                <Introduction />
              </div>
            </Route>

            <Route exact path="/Education">
              <div className="content">
                <Education />
              </div>
            </Route>
            <Route exact path="/ProfExperience">
              <div className="content">
                <ProfExperience />
              </div>
            </Route>
            <Route exact path="/Contact">
              <div className="content">
                <Contact />
              </div>
            </Route>
          </Switch>
        </Router>
      </footer>
    </div>
  );
}
