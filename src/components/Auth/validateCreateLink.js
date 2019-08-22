import { URL_REGEX } from '../../utils'

export default function validateCreateLink(values) {
  let errors = {}

  if (!values.description) {
    errors.description = 'Description required'
  } else if (values.description.length < 10) {
    errors.description = 'Description must be at least 10 characters'
  }
  if (!values.url) {
    errors.url = 'URL required'
  } else if (!URL_REGEX.test(values.url)) {
    errors.password = 'URL must be valid'
  }

  return errors
}
