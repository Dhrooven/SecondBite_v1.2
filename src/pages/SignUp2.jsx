import React, { useState } from 'react'
import { ReactComponent as YourSvg } from '../assets/secondbite-concept-illustration 1.svg'
import './SignUp2.css'
import { ReactComponent as LogoSvg } from '../assets/logo.svg'
// import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '../components/Input'
import {
  address_validation,
  pincode_validation,
  email_validation,
  phone_validation,
} from '../utils/inputValidations'

function SignUp() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedState, setSelectedState] = useState('')
  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectState = (state) => {
    setSelectedState(state)
    setIsOpen(false)
  }

  const methods = useForm()
  // const navigate = useNavigate()
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
    // navigate('/SignUp2')
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete='off'
        className='container'
      >
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
                <Input {...email_validation} />
                <Input {...phone_validation} />
                <Input {...address_validation} />
                <div className='input-group'>
                  <button onClick={toggleDropdown} className='dropbtn'>
                    {selectedState || 'State'}
                  </button>
                  {isOpen && (
                    <div className='dropdown'>
                      <ul>
                        {states.map((state) => (
                          <li key={state} onClick={() => selectState(state)}>
                            {state}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <Input {...pincode_validation} />
                <button
                  type='button'
                  className='register-button'
                  onClick={onSubmit}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default SignUp
