import { ReactComponent as YourSvg } from '../assets/secondbite-concept-illustration 1.svg'
import { useForm, FormProvider } from 'react-hook-form'
import './SignUp.css'
import { ReactComponent as LogoSvg } from '../assets/logo.svg'
import { Input } from '../components/Input'
import { useNavigate } from 'react-router-dom'
// import ErrorPage from './ErrorPage.js'

function SignUp() {
  const methods = useForm()
  const navigate = useNavigate()
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
    navigate('/SignUp2')
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
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
                <Input type='text' id='username' placeholder='Username' />
                <Input type='password' id='password' placeholder='Password' />
                <Input
                  type='password'
                  id='Repeat_password'
                  placeholder='Repeat Password'
                />
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
