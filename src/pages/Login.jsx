import React, { useState } from 'react'
import '../styles/components/_login.scss'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TiSocialFacebook  } from "react-icons/ti";
import {  BiLogoGoogle } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const route = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signin", {
            email,
            password
          })
    
          const token = response.data.token;
    
          if (token) {
            localStorage.setItem('myToken', token)
            route("/profile")
          }
    
        //   console.log('response', response.data);

        //<---make sure I have to use same email and password which I used to register
    
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <>
    <Navbar></Navbar>
    <div className='login'>
        <h2>Logdy</h2>
        <div className='login-form-container'>
            <div className='login-form-box'>
                <h4>Sign Into Your Account</h4>
                <form onSubmit={handleLogin} className='login-form'>
                    <div className='form-group'>
                        <input
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <div className='login-info'>
                        <h5><MdCheckBoxOutlineBlank /> Remember me</h5>
                        <h5>Forgot your password?</h5>
                    </div>
                    <button type="submit">Log in</button>
                    <div className='login-icon'>
                        <h5>Or Login With</h5>
                        <div className='icon-list'>
                            <div className='fb-icon'><TiSocialFacebook /></div>
                            <div className='ggl-icon'>< BiLogoGoogle /></div>
                            <div className='link-icon'><TiSocialLinkedin /></div>
                            <div className='twitter-icon'><TiSocialTwitter /></div>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Login