import img from '../../media/img-formContent.jpg';
import LoginForm from '../loginForm/loginForm';
import './formContainer.css';

function FormContainer() {
  return (
    <div className="formContainer">
        <img src={img} className="img-formContainer" loading="lazy"/>
        <div className="form-formContainer">
          <div className="links-form">
            <a>
              <h1>Login</h1>
            </a>
            or
            <a>
              <h1>Sing up</h1>
            </a>
          </div>
          <LoginForm className="container-loginForm"/>
        </div>
    </div>
  );
}

export default FormContainer;
