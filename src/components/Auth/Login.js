import React from 'react'
import styled from 'styled-components'

function Login() {
  const [login, setLogin] = React.useState(true)
  const handleToggle = () => setLogin(prevLogin => !prevLogin)
  return (
    <>
      <LoginTitle>{login ? 'Login' : 'Create Account'}</LoginTitle>
      <Form>
        {!login && (
          <input type="text" placeholder="Your name" autoComplete="off" />
        )}
        <input type="email" placeholder="Your email" autoComplete="off" />
        <input
          type="password"
          placeholder="Choose a secure password"
          autoComplete="off"
        />
        <ButtonContainer>
          <Button type="button">Submit</Button>
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

export default Login
