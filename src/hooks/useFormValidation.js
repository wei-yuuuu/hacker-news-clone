import React from 'react'

function useFormValidation(initialState, validate, authenticate) {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        authenticate()
        setIsSubmitting(false)
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors, isSubmitting, values])

  const handleChange = e => {
    e.persist()
    const { name, value } = e.target

    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setIsSubmitting(true)
  }
  const handleBlur = () => {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur
  }
}

export default useFormValidation
