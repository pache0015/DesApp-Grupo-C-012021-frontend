import './App.css';
import SwitcherLanguage from "./components/switcherLanguage/switcherLanguage";
import FormContainer from "./pages/formContainer/formContainer";
import React from "react";
import {Fragment} from "react";
import { Link, Route} from "wouter"
import UserHomer from "./pages/userHomer/UserHomer";

function App() {
  return (
      <Fragment>
          <SwitcherLanguage className="switcher"/>
          <Route path="/" component={ FormContainer } />
          <Route path="/home" component={ UserHomer} />
      </Fragment>
  );
}
export default App;
