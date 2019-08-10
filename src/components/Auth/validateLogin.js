import { EMAIL_REGEX } from '../../utils'

export default function validateLogin(values) {
  let errors = {}

  if (!values.email) {
    errors.email = 'Email required'
  } else if (!EMAIL_REGEX.test(values.email)) {
    console.log('errors')
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  return errors
}
