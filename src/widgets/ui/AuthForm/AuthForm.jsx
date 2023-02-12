import React, { useState } from 'react'
import {UsernameInput, PasswordInput, SftLogo} from '../../../shared'
import {FormAuthButton} from '../../../features'
import './auth-form.css'

export const AuthForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitFormAuthButtonClick = event => {
    event.preventDefault()
    setUsername('')
    setPassword('')
  }

  return (
    <form className='auth-form' onSubmit={onSubmitFormAuthButtonClick}>
      <SftLogo />
      <UsernameInput value={username} setValue={setUsername}/>
      <PasswordInput value={password} setValue={setPassword}/>
      <FormAuthButton />
    </form>
  )
}