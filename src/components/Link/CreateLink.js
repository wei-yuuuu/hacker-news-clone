import React from 'react'
import styled from 'styled-components'

import useFormValidation from '../../hooks/useFormValidation'
import validateCreateLink from '../Auth/validateCreateLink'

const INITIAL_STATE = {
  description: '',
  url: ''
}

const CreateLink = props => {
  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITIAL_STATE,
    validateCreateLink,
    handleCreateLink
  )
  function handleCreateLink() {
    console.log('link')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="description"
        placeholder="A description for your link"
        autocomplete="off"
        type="text"
        value={values.description}
        onChange={handleChange}
        errors={errors.description}
      />
      {errors.description && <ErrorText>{errors.description}</ErrorText>}
      <Input
        name="url"
        placeholder="A URL for your link"
        autocomplete="off"
        type="text"
        value={values.url}
        onChange={handleChange}
        errors={errors.url}
      />
      {errors.url && <ErrorText>{errors.url}</ErrorText>}
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const SubmitButton = styled.button`
  font-family: monospace;
  font-size: 10pt;
  color: black;
  background-color: buttonface;
  text-align: center;
  padding: 2px 6px 3px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonface;
  cursor: pointer;
  max-width: 250px;
`

const Input = styled.input`
  border: ${props => props.errors && `1.5px solid rgba(255, 0, 0, 0.6)`};
  border-radius: ${props => props.errors && `3px`};
`

const ErrorText = styled.p`
  margin: 0.25em 0 0.5em 0;
  padding: 0;
  color: red;
  font-style: bold;
`

export default CreateLink
