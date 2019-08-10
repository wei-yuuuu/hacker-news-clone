import React from 'react'

function useFormValidation(initialState) {
  const [values, setValues] = React.useState(initialState)
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
    console.log({ values })
  }

  return { values, handleChange, handleSubmit }
}

export default useFormValidation
