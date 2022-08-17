import React, {useState, useEffect} from 'react'
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';

export const Register = () => {

  const regexUsername = /^[a-zA-Z0-9]{3,20}$/;
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [userValidate, setUserValidate] = useState('');
  const [emailValidate, setEmailValidate] = useState('');
  const [passwordValidate, setPasswordValidate] = useState('');
  const [confirmPasswordValidate, setConfirmPasswordValidate] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [typePassword, setTypePassword] = useState('password');
  const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');

  const username2 = (event) => {   
      setUsername(event.target.value);
    }

  const email2 = (event) => {   
      setEmail(event.target.value);
    }
    
  const pass2 = (event) => {
      setPassword(event.target.value);
    }    

  const password2 = () => {    
    setShowPassword(!showPassword);    
  }

  const confirmPass = () => {    
    setShowPassword(!showPassword);    
  }

  const confirmPassword2 = () => {    
    setShowConfirmPassword(!showConfirmPassword);
  }

  const submit = (event) => {
    event.preventDefault();
  }

  // useEffect(() => {
  //   showPassword ? setTypePassword("text") : setTypePassword("password");
  //   showConfirmPassword ? setTypeConfirmPassword("text") : setTypeConfirmPassword("password");
  //   // validar username
  //   if(regexUsername.test(username)){
  //       setUserValidate('');
  //   }else{
  //       setUserValidate('letters or numbers,without spaces,minimum 3 characters and maximum 20 characters');
  //   }
  //   // validar email
  //   if(regexEmail.test(email)){
  //       setEmailValidate('');
  //   } else {
  //     setEmailValidate('invalid email');
  //   }
  //   // validar password
  //   if(regexPassword.test(password)){
  //       setPasswordValidate('');
  //   } else {
  //     setPasswordValidate('letters, numbers, special characters, minimum 8 characters');
  //   }
  //   // validar confirm password
  //   if(password === confirmPassword){
  //       setConfirmPasswordValidate('');
  //   } else {
  //     setConfirmPasswordValidate('passwords do not match');
  //   }
    
  // },[showPassword, showConfirmPassword, username,email, password, confirmPassword]);


  return (
    <div className='form'>
        <div className='form2'>
            <h1>Register</h1>
            <form className='formulario' onSubmit={submit}>
                <label>Name</label>
                <input type="text" placeholder='Enter your name' name='userName' required onChange={username2}/>
                <p className='showText'>{userValidate}</p>

                <br /><br />

                <label>Email</label>
                <input type="text" placeholder='Enter your email' name='userEmail' required onChange={email2}/>
                <p className='showText'>{emailValidate}</p>

                <br /><br />

                <label>Password</label>
                <input type={typePassword} placeholder='Enter your password' onChange={pass2}/>
                  {showPassword ? <button onClick={password2} className='btn-eye'><AiFillEyeInvisible /></button> : <button onClick={password2} className='btn-eye'><AiFillEye /></button>}
                <p className='showText'>{passwordValidate}</p>

                <label>Confirm password</label>
                <input type={typeConfirmPassword} placeholder='Confirm your password' onChange={confirmPass}/>
                  {showConfirmPassword ? <button onClick={confirmPassword2} className='btn-eye'><AiFillEyeInvisible /></button> : <button onClick={confirmPassword} className='btn-eye'><AiFillEye /></button>}
                <p className='showText'>{confirmPasswordValidate}</p>

                <br />
                <button className='buton'>Register</button>
            </form>
        </div>
    </div>
  )
}
