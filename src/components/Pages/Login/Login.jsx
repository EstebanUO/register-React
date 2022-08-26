import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Header } from '../../layouts/Header/Header'
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";

export const Login = () => {

  //Constantes
  const [userName, setuserName] = useState("")
  const [validName, setvalidName] = useState("")
  const [password, setpassword] = useState("")
  // const [validPassword, setvalidPassword] = useState("")
  const regexUsername = /^[a-zA-Z0-9]{3,20}$/;
  const [messageInicio, setmessageInicio] = useState("")

  //Funciones
  const onUser = (event) => {setuserName(event.target.value)}
  const onPass = (event) => {setpassword(event.target.value)}
  const [showPass2, setShowPass2] = useState(false);

  const iconShow = (event) => {
    event.preventDefault();
    setShowPass2(!showPass2)
  }

  //useEffect
  useEffect(() => {
    //UserName Validation
    if(regexUsername.test(userName)){
      setvalidName("")
    }else{
      setvalidName("Solo letras y numeros, no se permiten espacios, minimo 3 caracteres y maximo 20.")
    }

  }, [userName, validName])

  //Constantes Axios
  const axios = require('axios');

  async function getUser() {
    try {
      const response = await axios.get('https://backend-edw.herokuapp.com/usuarios');
      // console.log(response.data)

      let login = response.data
      login.map(datos => {
        if (userName === datos[1] && password === datos[3]) {
          console.log("Inicio exitoso");
          setmessageInicio("Inicio exitoso")
        }else{
          console.log("Inicio no permitido");
          // setmessageInicio("Inicio no permitido")
        }
      })
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
        <Header/>
        <div className="formulario">
            <div>
              <div className="formulario2">
                <h1 className="titleReg">Iniciar Sesion</h1><br />
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
                <div className="formularioLog">
                  <label for="exampleInputEmail1" class="labelsReg"><br/>User name</label>
                    <input name="username" type="text" class="form-input" id="exampleInputEmail1" placeholder="User name" value={userName} onChange={onUser}/>

                  <label for="inputPassword" class="labelsReg"><br/>Password</label>
                  <div className="showPass">
                    <input name="password" type={showPass2 ? "text" : "password"} class="form-input" id="inputPassword" placeholder="Password" value={password} onChange={onPass}/>
                    <button className='button-show' onClick={iconShow}>{showPass2 ? <BsEyeFill />:<BsEyeSlashFill />}</button><br />
                  </div>

                  <div className="submitReg">
                    <button onClick={getUser} class="submitReg2">Iniciar Sesion</button>
                  </div><br /><br />
                  <p>{messageInicio}</p>
                </div>
              </div>
            </div>
            <div className="welcome-back">
                  <div className="message">
                    <h2>Bienvenido</h2>
                    <p>Si ya tienes una cuenta por favor registrate aqui</p>
                    <Link to="/register" className="aaa"> 
                      <button className="signUpBtn">Registrarse</button>
                    </Link>
                  </div>
            </div>
        </div>
    </div>
  )
}
