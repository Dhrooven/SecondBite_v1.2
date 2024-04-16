import React from 'react'
import { ReactComponent as YourSvg } from '../assets/secondbite-concept-illustration 1.svg'
import './SignUp2.css'
import { ReactComponent as LogoSvg } from '../assets/logo.svg'
function SignUp() {
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
              <input type='text' className='input-field' placeholder='Email' />
            </div>
            <div className='input-group'>
              <span className='input-icon'>
                <i className='fas fa-lock'></i>
              </span>
              <input
                type='text'
                className='input-field'
                placeholder='Contact'
              />
            </div>
            <div className='input-group'>
              <span className='input-icon'>
                <i className='fas fa-key'></i>
              </span>
              <input
                type='text'
                className='input-field'
                placeholder='Address'
              />
            </div>
            <div className='input-group'>
              <button onclick='toggleDropdown()' class='dropbtn'>
                State
              </button>
              <div className="dropdown">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            </div>
            <div className='input-group'>
              <span className='input-icon'>
                <i className='fas fa-key'></i>
              </span>
              <input
                type='text'
                className='input-field'
                placeholder='Pincode'
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
            <button
              type='button'
              className='register-button'
              /* onClick={handleClick} */
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
