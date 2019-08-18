import React from 'react'
import styled from 'styled-components'

import useFormValidation from '../../hooks/useFormValidation'
import validateLogin from '../Auth/validateLogin'
import firebase from '../../firebase'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

function Login() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser)

  const [login, setLogin] = React.useState(true)
  const handleToggle = () => setLogin(prevLogin => !prevLogin)
  async function authenticateUser() {
    const { name, email, password } = values
    const response = login
      ? await firebase.login(email, password)
      : await firebase.register(name, email, password)
    console.log(response)
  }

  return (
    <>
      <LoginTitle>{login ? 'Login' : 'Create Account'}</LoginTitle>
      <Form onSubmit={handleSubmit}>
        {!login && (
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="off"
          />
        )}
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Your email"
          autoComplete="off"
          errors={errors.email}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
        <Input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Choose a secure password"
          autoComplete="off"
          errors={errors.password}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <ButtonContainer>
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            isSubmitting={isSubmitting}
          >
            Submit
          </SubmitButton>
          <Button type="button" onClick={handleToggle}>
            {login ? 'Need to create an account' : 'Already have an account?'}
          </Button>
        </ButtonContainer>
      </Form>
    </>
  )
}

const LoginTitle = styled.h2`
  margin: 1rem 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
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
  margin-right: 0.5rem;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
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

const SubmitButton = styled(Button)`
  background: ${props => (props.isSubmitting ? 'grey' : 'orange')};
`

export default Login
