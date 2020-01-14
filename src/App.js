import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Kanban from "./frontend/kanban";
import Calendar from "./frontend/calendar";
import "./universal.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/k">
            <Kanban />
          </Route>

          <Route exact path="/c">
            <Calendar /> 
          </Route>

          <Route path="/">
            <Kanban />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
