import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormPage from "./components/form/FormPage";
import ResultPage from "./components/result/ResultPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route path="/result/:id" component={ResultPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
