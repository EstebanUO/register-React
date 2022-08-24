import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Header } from '../../layouts/Header/Header'

export const Login = () => {
  return (
    <div>
        <Header/>
        <div className="formulario">
            <div>
              <form className="formulario2">
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
                  <label for="exampleInputEmail1" class="labelsReg"><br/>Email</label>
                    <input name="correo" type="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@" autocomplete="off" required/>

                  <label for="inputPassword" class="labelsReg"><br/>Password</label>
                    <input name="password" type="password" class="form-input" id="inputPassword" placeholder="Password"/>
                  
                  <div className="submitReg">
                    <button type="submit" class="submitReg2">Iniciar Sesion</button>
                  </div>
                </div>
              </form>
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
