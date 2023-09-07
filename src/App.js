import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
} from "react-router-dom";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/quiz/*" element={<Quiz />} />
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
};

export default App;
