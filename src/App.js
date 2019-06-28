import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./components/todos.js";
import EditToDo from "./components/edit.js";
import CreateToDo from "./components/create.js";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Todo App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditToDo} />
        <Route path="/create" component={CreateToDo} />
      </div>
    </Router>
  );
}

export default App;
