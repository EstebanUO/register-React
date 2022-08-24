import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../layouts/Header/Header'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";
import { Footer } from '../../layouts/Footer/Footer';

export const Register = () => {

  //Constantes
  const [userName, setUserName] = useState("");
  const [validName, setValidName] = useState("");
  const [email2, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(".@")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  //Funciones
  const onUserName = (event) => {setUserName(event.target.value)};
  const onEmail = (event) => {setEmail(event.target.value)};
  const onPassword = (event) => {setPassword(event.target.value)};
  const onConfirmPass = (event) => {setConfirmPassword(event.target.value)};
  const [showPass, setShowPass] = useState(false);
  
  const iconShow = (event) => {
    event.preventDefault();
    setShowPass(!showPass)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    setValidName(userName);
    setValidEmail(email2);
  }

  //UseEffect
  useEffect(() => {
    //UserName Validacion
    if(validName.indexOf('`')!== -1 || validName.indexOf('.')!== -1 || validName.indexOf('@')!== -1 || validName.indexOf('!')!== -1 || validName.indexOf('%')!== -1 || validName.indexOf('$')!== -1 || /\s/.test(validName)){
      document.getElementById('validUserName').textContent = 'Usuario Invalido: solo se permiten letras o numeros, sin espacios, minimo 3 caracteres y maximo 20.';
    }else{
      document.getElementById('validUserName').textContent = '';
    }
    
    // Email Validacion
    if (validEmail.indexOf('.')=== -1 || validEmail.indexOf('@')=== -1 || /\s/.test(validEmail)) {
      document.getElementById('validemail').textContent = 'Email Invalido';
    }else{
      document.getElementById('validemail').textContent = '';
    }

    // Password Validacion
    if (confirmPassword === password) {
      document.getElementById('buttonSend').removeAttribute('disabled')
    }else{
      document.getElementById('buttonSend').setAttribute('disabled','true')
    }

    if (password === confirmPassword) {
      document.getElementById('validPassword').textContent = '';
    }else{
      document.getElementById('validPassword').textContent = 'Las contraseñas no coinciden!!';
    }

  }, [validName, validEmail, confirmPassword, password]);

  return (
    <div>
        <Header/>
        <div className="formulario">
              <div className="welcome-back">
                  <div className="message">
                    <h2>Bienvenido</h2>
                    <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
                    <Link to="/login"> 
                      <button className="signUpBtn">Iniciar Sesion</button>
                    </Link>
                  </div>
              </div>
            <div>
              <form className="formulario2" onSubmit={onSubmitForm}>
                <h1 className="titleReg">Registro</h1><br />
                <div className="iconos">
                  <div className="border-icon">
                    <FaFacebook/>
                  </div>
                  <div className="border-icon">
                    <FaInstagram/>
                  </div>
                  <div className="border-icon">
                    <FaLinkedin/>
                  </div>
                </div><br />
                <div className="formularioReg">
                  <label for="inputUser" class="labelsReg">User name</label>
                    <input name="name" type="text" class="form-input" placeholder="User name" value={userName} onChange={onUserName} required/>
                    <p id="validUserName"></p>
                    
                  <label for="exampleInputEmail1" class="labelsReg"><br/>Email</label>
                    <input name="correo" type="email" class="form-input" id="exampleInputEmail1" value={email2} onChange={onEmail} placeholder="Example@" required/>
                    <p id="validemail"></p>

                  <label for="inputPassword" class="labelsReg"><br/>Password</label>
                  <div className="showPass">
                    <input name="password" type={showPass ? "text" : "password"} class="form-input" placeholder="Password" value={password} onChange={onPassword} required minLength={8}/>
                    <button className='button-show' onClick={iconShow}>{showPass ? <BsEyeFill />:<BsEyeSlashFill />}</button><br />
                  </div>
                  <p id="validPassword"></p>

                  <label for="inputPassword" class="labelsReg"><br/>Confirm password</label>
                    <input name="password" type="password" class="form-input" placeholder="Confirm your password" value={confirmPassword} onChange={onConfirmPass} required minLength={8}/>
                    <p id="validPassword"></p>
                  <br />
                  <div className="checkTyC">
                    <input type="checkbox" required/><p>Haz click aqui para aceptar nuestros<br/>terminos y condiciones.</p>
                  </div>
                  
                  <div className="submitReg">
                    <input type="submit" id="buttonSend" class="submitReg2"/>
                  </div>
                </div>
              </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
