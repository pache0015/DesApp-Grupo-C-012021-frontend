import React from "react";
import img from '../../media/img-formContent.jpg';
import RegisterForm from '../registerForm/registerForm';
import './formContainer.css';
import LoginForm from "../loginForm/loginForm";
import FormToShow from "../FormToShow/FormToShow";

class FormContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true
    };
    this.changeState = this.changeState.bind(this);
    this.changeLoginFalse = this.changeLoginFalse.bind(this);
    this.changeLoginTrue = this.changeLoginTrue.bind(this);

  }

  changeState(bool){
    this.setState(() =>({
      isLoginActive: bool
    }))
  }
  changeLoginTrue(){
    this.changeState(true);
  }
  changeLoginFalse(){
    this.changeState(false);
  }
  render (){
    return(
    <div className="formContainer">
        <img src={img} className="img-formContainer" loading="lazy"/>
        <div className="form-formContainer">
          <div className="links-form">
            <a onClick={this.changeLoginTrue}>
              <h1>Login</h1>
            </a>
            or
            <a onClick={this.changeLoginFalse}>
              <h1>Sign up</h1>
            </a>
          </div>
          <FormToShow isLoginActive={this.state.isLoginActive}/>
        </div>
    </div>
  );
}
}

export default FormContainer;
