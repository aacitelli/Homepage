import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Kanban from "./frontend/kanban";
import "./universal.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Kanban />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
