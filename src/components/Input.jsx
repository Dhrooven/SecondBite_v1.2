import { isFormInvalid } from '../utils/isFormInvalid.js'
import { findInputError } from '../utils/findInputError.js'
import '../pages/SignUp.css'
import { useFormContext } from 'react-hook-form'
import { motion, AnimatePresence } from "framer-motion"

export const Input = ({ type, id, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputError = findInputError(errors, id)
  const isInvalid = isFormInvalid(inputError)

  return (
    <div className='input-group'>
      <span className='input-icon'>
        <i className='fas fa-user'></i>
      </span>
      <AnimatePresence mode='wait' initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
      <input
        id={id}
        type={type}
        className='input-field'
        placeholder={placeholder}
        {...register(id, {
          required: {
            value: true,
            message: 'Required!',
          },
        })}
      />
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className='flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md element-on-top'
      {...framer_error}
    >
      {message}
    </motion.p>
  )
}
// <MdError />

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
