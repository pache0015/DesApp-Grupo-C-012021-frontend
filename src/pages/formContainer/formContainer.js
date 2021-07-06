import React, {useState} from "react";
import img from '../../media/img-formContent.jpg';
import './formContainer.css';
import FormToShow from "../../components/FormToShow/FormToShow";
import {useTranslation} from "react-i18next";

export default function FormContainer (){

  const { t, i18n } = useTranslation();
  const [isLoginActive, setIsLoginActive] = useState(true)
  const handleCLick = (e) =>{
    e.preventDefault();
    setIsLoginActive(!isLoginActive)
  }
  /*constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true
    };

    this.changeState = this.changeState.bind(this);
    this.changeLoginFalse = this.changeLoginFalse.bind(this);
    this.changeLoginTrue = this.changeLoginTrue.bind(this);
  }*/

  /*changeState(bool){
    this.setState(() =>({
      isLoginActive: bool
    }))
  }
  changeLoginTrue(){
    this.changeState(true);
  }
  changeLoginFalse(){
    this.changeState(false);
  }*/
    return(
    <div className="formContainer">
        <img src={img} className="img-formContainer" loading="lazy" alt=""/>
        <div className="form-formContainer">
          <div className="links-form">
            <a onClick={handleCLick}>
              <h1>{t("login")}</h1>
            </a>
            {t("or")}
            <a onClick={handleCLick}>
              <h1>{t("signUp")}</h1>
            </a>
          </div>
          <FormToShow isLoginActive={isLoginActive}/>
        </div>
    </div>
  );
}

