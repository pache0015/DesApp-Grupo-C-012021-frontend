import './App.css';
import SwitcherLanguage from "./components/switcherLanguage/switcherLanguage";
import FormContainer from "./pages/formContainer/formContainer";
import React from "react";
import {Fragment} from "react";
import { Route} from "wouter"
import UserHome from "./pages/userHome/UserHome";
import Context from "./contexts/UserContext";
import {UserContextProvider} from "./contexts/UserContext";

function App() {
  return (
      <UserContextProvider>
          <SwitcherLanguage className="switcher"/>
          <Route path="/" component={ FormContainer } />
          <Route path="/login" component={ FormContainer } />
          <Route path="/home" component={ UserHome} />
      </UserContextProvider>
  );
}
export default App;
