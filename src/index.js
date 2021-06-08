import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormContainer from './components/formContainer/formContainer.js';
import SwitcherLanguage from "./components/switcherLanguage/switcherLanguage";

ReactDOM.render(
  <React.StrictMode>
      <SwitcherLanguage className="switcher"/>
      <FormContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

