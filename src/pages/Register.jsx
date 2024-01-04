import axios from 'axios';
import React, { useState } from 'react'
import '../styles/components/_register.scss'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TiSocialFacebook  } from "react-icons/ti";
import {  BiLogoGoogle } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import Navbar from '../components/Navbar';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOtpSend, setIsOtpSend] = useState(false);
    const [otp, setOtp] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
          const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signup", {
            name,
            email,
            password
          })
        //   console.log('response', response.data);
          
          if (response.data.isOtpSend) {
            setIsOtpSend(true)
          }
        } catch (error) {
            console.log(error);
        }
    }

    const handleOTP = async(e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/verifyotp", {
            otp,
            email
          })
    
          if (response.data.success) {
            alert("Registered successfully!")
            setIsOtpSend(false)
          }
         } catch (error) {
           console.log(error);
         }
      }

  //--->After return I use fragment tag and Navbar component to show navbar on top of the this page in the browser----->    
  return (
    <>
    <Navbar></Navbar>
    <div className='register'>
        <h2>Logdy</h2>
        <div className='register-form-container'>
            {
                isOtpSend ?
                <div className="otp-form-box">
                  <h4>Verify OTP</h4>
                  <form onSubmit={handleOTP} className='register-form'>
                    <div className="form-group">
                      <input 
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                       />
                    </div>
                    <button type='submit'>Send & Verify</button>
                  </form>
                </div>
                :
                <div className='register-form-box'>
                <h4>Create An Account</h4>
                <form onSubmit={handleSubmit} className='register-form'>
                    <div className='form-group'>
                        <input
                        type="text" 
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                        type="email" 
                        placeholder="Email Address"
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
                    <div className='register-info'>
                        <h5><span className='info-icon'><MdCheckBoxOutlineBlank /></span> Remember me</h5>
                        <h5>Forgot your password?</h5>
                    </div>
                    <button type="submit">Register</button>
                    <div className='register-icon'>
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
            }
          
        </div>
        
    </div>
    </>
  )
}

export default Register