import React, { useState } from 'react'
import { ReactComponent as YourSvg } from '../assets/secondbite-concept-illustration 1.svg'
import './SignUp.css'
import { ReactComponent as LogoSvg } from '../assets/logo.svg'
import SignUp2 from './signup2.js'
function SignUp() {
  const [showSignUp2, setShowSignUp2] = useState(false)
  const handleClick = () => {
    setShowSignUp2(true)
  }
  return (
    <div className='signup-container'>
      <div className='svg-container'>
        <YourSvg />
      </div>
      <div>
        <h2 className='logo_text'>SecondBite</h2>
      </div>
      <div className='signup-content'>
        <div className='form-container'>
          <div className='form-wrapper'>
            <div className='icon-container'>
              <LogoSvg />
            </div>
            <h1 className='form-title'>Sign up</h1>
            <div className='input-group'>
              <span className='input-icon'>
                <i className='fas fa-user'></i>
              </span>
              <input
                type='text'
                className='input-field'
                placeholder='Username'
              />
            </div>
            <div className='input-group'>
              <span className='input-icon'>
                <i className='fas fa-lock'></i>
              </span>
              <input
                type='password'
                className='input-field'
                placeholder='Password'
              />
            </div>
            <div className='input-group'>
              <span className='input-icon'>
                <i className='fas fa-key'></i>
              </span>
              <input
                type='password'
                className='input-field'
                placeholder='Repeat your password'
              />
            </div>
            <div className='checkbox-group'>
              <input
                type='checkbox'
                className='checkbox-input'
                id='newsletter-checkbox'
              />
              <label htmlFor='newsletter-checkbox' className='checkbox-label'>
                Subscribe to our newsletter
              </label>
            </div>
            {showSignUp2 && <SignUp2 />}
            <button
              type='button'
              className='register-button'
              onClick={handleClick}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
