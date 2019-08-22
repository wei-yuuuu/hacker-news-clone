import React from 'react'
import styled from 'styled-components'

import FirebaseContext from '../../firebase/context'

function ForgotPassword() {
  const [resetPasswordEmail, setResetPasswordEmail] = React.useState('')
  const [isPasswordReset, setIsPasswordReset] = React.useState(false)
  const [passwordResetError, setPasswordResetError] = React.useState(null)
  const { firebase } = React.useContext(FirebaseContext)

  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPasswordEmail)
      setIsPasswordReset(true)
      setPasswordResetError(null)
    } catch (error) {
      console.error('Error sending email', error)
      setPasswordResetError(error.message)
      setIsPasswordReset(false)
    }
  }

  return (
    <>
      <EmailInput
        type="email"
        placeholder="Provide your account email"
        onChange={e => setResetPasswordEmail(e.target.value)}
      />
      <ResetButton onClick={handleResetPassword}>Reset Password</ResetButton>
      {isPasswordReset && <p>Check email to reset password</p>}
      {passwordResetError && <ErrorTest>{passwordResetError}</ErrorTest>}
    </>
  )
}

const EmailInput = styled.input`
  display: block
  -webkit-appearance: none;
  -moz-appearance: none;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  padding: 0.2rem;
  margin: 0.5rem 0;
  width: 100%;
  margin-bottom: 0.2em;
  max-width: 500px;
`

const ResetButton = styled.button`
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

const ErrorTest = styled.p`
  margin: 0.25em 0 0.5em 0;
  padding: 0;
  color: red;
  font-style: bold;
`

export default ForgotPassword
