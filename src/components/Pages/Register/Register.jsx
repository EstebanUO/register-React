import React from 'react'
import axios from 'axios'
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
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regexUsername = /^[a-zA-Z0-9]{3,20}$/;

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

  //UseEffect
  useEffect(() => {
    //UserName Validacion
    if(regexUsername.test(userName)){
      setValidName('')
    }else{
      setValidName("Solo letras y numeros, no se permiten espacios, minimo 3 caracteres y maximo 20.")
    }
    
    // Email Validacion
    if (regexEmail.test(email2)) {
      setValidEmail('')
    }else{
      setValidEmail('Email invalido')
    }

    //Password Validacion
    if (password === confirmPassword) {
      document.getElementById('validPassword').textContent = '';
    }else{
      document.getElementById('validPassword').textContent = 'Las contraseñas no coinciden!!';
    }

  }, [validName, validEmail, confirmPassword, password, email2, userName, password]);


  const [messageApis, setmessageApis] = useState("")

  const axiosApi = () => {
    axios.post('https://backend-edw.herokuapp.com/usuario', 
    {
      "username": userName,
      "password": password,
      "name": email2,
    })
    .then (response => {
      console.log(response.data);
      let messageApi = response.data
      setmessageApis(messageApi)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
              <div className="formulario2">
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
                    <input name="name" type="text" class="form-input" placeholder="User name" value={userName} onChange={onUserName} />
                    <p class="errorMsg">{validName}</p><br />
                    <p class="">{messageApis.Message}</p>
                    
                  <label for="exampleInputEmail1" class="labelsReg"><br/>Email</label>
                    <input name="correo" type="email" class="form-input" id="exampleInputEmail1" value={email2} onChange={onEmail} placeholder="Example@" />
                    <p class="errorMsg">{validEmail}</p>

                  <label for="inputPassword" class="labelsReg"><br/>Password</label>
                  <div className="showPass">
                    <input name="password" type={showPass ? "text" : "password"} class="form-input" placeholder="Password" value={password} onChange={onPassword} />
                    <button className='button-show' onClick={iconShow}>{showPass ? <BsEyeFill />:<BsEyeSlashFill />}</button><br />
                  </div>
                  <p class="errorMsg" id="validPassword"></p>

                  <label for="inputPassword" class="labelsReg"><br/>Confirm password</label>
                    <input name="password" type="password" class="form-input" placeholder="Confirm your password" value={confirmPassword} onChange={onConfirmPass} />
                    <p id="validPassword"></p>
                  <br />
                  <div className="checkTyC">
                    <input type="checkbox"/><p>Haz click aqui para aceptar nuestros<br/>terminos y condiciones.</p>
                  </div>
                  
                  <div className="submitReg">
                    <button onClick={axiosApi} class="submitReg2">Registrate</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
