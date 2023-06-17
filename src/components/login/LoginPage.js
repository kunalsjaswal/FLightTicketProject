import React, { memo, useContext, useState } from 'react'
import { LoginStyleDiv } from './LoginStyle'
import contextStore from '../../context/contextFile';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const {newUser, setNewUser,showLogIn,showAdmin,showSignUp, adminError,setloginDetails} = useContext(contextStore);
  
  // local states 
  const [passwordValidate, setPasswordValidate] = useState({password:"",confirmPassword:""})
  const [errorMessage, setErrorMessage] = useState("")

  const [userLoginData, setUserLoginData] = useState({email:"",password:""})

  const [userAdminData, setUserAdminData] = useState({email:"",password:""})
  
  // alerts 
  const [badAlert, setBadAlert] = useState(false)
  const [goodAlert, setGoodAlert] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const handleSignup=async(ev)=>{
    ev.preventDefault()
    const response = await fetch("http://localhost:5000/skyview/addUser",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({username:newUser.username,email:newUser.email,password:passwordValidate.password})
    }) 

    const json = await response.json() 
    if(json.status){
      setBadAlert(false)
      setGoodAlert(true)
      setNewUser({username:"",email:""})
      setPasswordValidate({password:"",confirmPassword:""})
      setInterval(() => {
        setGoodAlert(false)
      }, 2000);

    }else{
      setBadAlert(true)
      setErrorMessage(json.error)
    }
  }
  const onSignUpHandler=async(ev)=>{
    if(newUser.username.length===0 || newUser.email.length===0 || passwordValidate.password.length===0){
      setBadAlert(true)
      setGoodAlert(false)
      setErrorMessage("Fill all fields.")
    }
    else if(passwordValidate.password.length<5){
      setBadAlert(true)
      setGoodAlert(false)
      setErrorMessage("Password is too short.")
    }
    else if(passwordValidate.password !== passwordValidate.confirmPassword){
      setBadAlert(true)
      setGoodAlert(false)
      setErrorMessage("Password not matching")
    }else{
      handleSignup(ev)
    }
  }

  const handleLogin=async(ev)=>{
    ev.preventDefault();
   
    if(userLoginData.email.length==0 || userLoginData.password.length == 0){
      setLoginError(true)
      setErrorMessage("fill all fields.");
    }else{
      const response = await fetch("http://localhost:5000/skyview/userLogin",{
        method:"POST",
        headers:{
        "Content-Type":"application/json",
        },
        body:JSON.stringify({email:userLoginData.email, password:userLoginData.password})
      })

      const json = await response.json();
      if(json.status){
        setLoginError(false)

        localStorage.setItem('username',json.uname)
        localStorage.setItem('token',json.userid)

        setloginDetails({id:json.userid})
        navigate('/dashboard')
                
      }else{
        setLoginError(true)
        setErrorMessage(json.error);
      }
    }

  }

  const [adminAlert, setadminAlert] = useState(false)
  const handleAdminLogin=()=>{
    if(userAdminData.email==="admin" && userAdminData.password ==="admin"){
        setadminAlert(false)
        navigate('/adminPage')
    
      }else{

        setadminAlert(true)
    }
}


  return (
    <LoginStyleDiv >
        <h1 data-aos="fade-out" id='shift-2' >Welcome Back!</h1>
        <h3>The faster you fill up,the faster you get a ticket</h3>
       
       
        <div className="form-login" id='login-id'>
          <label>Email</label>
          <input type="email"  placeholder='abc@email.com..' value={userLoginData.email} onChange={ev=>setUserLoginData({...userLoginData,email:ev.target.value})}/>
          <label>Password</label>
          <input type="password"  value={userLoginData.password} onChange={ev=>setUserLoginData({...userLoginData,password:ev.target.value})}/>
          
          {loginError && 
            <Alert severity="warning" style={{marginTop:"4%", width:"97%"}}>
              {errorMessage}
            </Alert>}

          <button onClick={handleLogin}>Log In</button>

            <h4>
              <span>don't have an account? </span>
              <b className="click-signup" onClick={showSignUp}>Sign up</b>
            </h4>
            <h4>
              <span>Admin account? </span>
              <b className="click-login" onClick={showAdmin}>Admin Login</b>
            </h4>
        </div>

        <div className="form-login admin-login" id='admin-id'>
          <label >Admin Id</label>
          <input type="text"  placeholder='username or email' value={userAdminData.email} onChange={ev=>setUserAdminData({...userAdminData,email:ev.target.value})}/>
          <label >Admin Password</label>
          <input type="password" value={userAdminData.password} onChange={ev=>setUserAdminData({...userAdminData,password:ev.target.value})}/>
          {
            adminAlert && 
            <Alert severity="warning" style={{marginTop:"4%", width:"97%"}}>Invalid Credentials</Alert>
          }
          <button onClick={handleAdminLogin}>Log In</button>

            <h4>
              <span>don't have an account? </span>
              <b className="click-signup" onClick={showSignUp}>Sign up</b>
            </h4>
            <h4>
              <span>Already have an account? </span>
              <b className="click-login" onClick={showLogIn}>Log In</b>
            </h4>
            
        </div>

        <div className="form-login form-signup" id='signup-id'>
          <label >Username</label>
          <input type="text"  placeholder='abc..' value={newUser.username} onChange={ev=>setNewUser({...newUser,username:ev.target.value})}/>
          <label >Email</label>
          <input type="email"  placeholder='abc@gmail.com' value={newUser.email} onChange={ev=>setNewUser({...newUser,email:ev.target.value})}/>
          <label >Password</label>
          <input type="password" value={passwordValidate.password} onChange={ev=>setPasswordValidate({...passwordValidate, password:ev.target.value})}/>
          <label >Confirm Password</label>
          <input type="password" value={passwordValidate.confirmPassword} onChange={ev=>setPasswordValidate({...passwordValidate, confirmPassword:ev.target.value})}/>
          {
            badAlert && 
            <Alert severity="warning" style={{marginTop:"4%", width:"97%"}}>{errorMessage}</Alert>

          }
          {
            goodAlert &&
            <Alert severity="success" style={{marginTop:"4%", width:"97%"}}>Succesfully Registered</Alert>
          }
          <button onClick={onSignUpHandler}>Sign Up</button>

          <h4>
            <span>Already have an account? </span>
            <b className="click-login" onClick={showLogIn}>Log In</b>
          </h4>
          <h4>
            <span>Admin account? </span>
            <b className="click-login" onClick={showAdmin}>Admin Login</b>
          </h4>

        </div>

    </LoginStyleDiv>
  )
}

export default memo(LoginPage)