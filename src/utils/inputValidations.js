export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Username',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const address_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 100,
      message: '100 characters max',
    },
  },
}
export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'Password',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

export const repeat_password_validation = {
  name: 'repeat_password',
  label: 'repeat_password',
  type: 'password',
  id: 'repeat_password',
  placeholder: 'Repeat your password',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}
export const num_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const pincode_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'Pincode',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    length: {
      value: 6,
      message: 'Pincode must be of 6 characters',
    },
  },
}

export const phone_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'Phone number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 10,
      message: 'min 10 length',
    },
  },
}
export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'Email',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}
