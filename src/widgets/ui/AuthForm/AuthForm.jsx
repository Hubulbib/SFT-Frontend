import React, { useContext, useState } from 'react'
import { UsernameInput, PasswordInput, SftLogo, Context } from '../../../shared'
import {FormAuthButton} from '../../../features'
import './auth-form.css'
import { observer } from 'mobx-react-lite'

export const AuthForm = observer(() => {

  const {authStore: {login}} = useContext(Context)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitFormAuthButtonClick = event => {
    event.preventDefault()
    login(username, password)
      .then(() => {
        setUsername('')
        setPassword('')
      })
  }

  return (
    <form className='auth-form' onSubmit={onSubmitFormAuthButtonClick}>
      <SftLogo color={'black'} styles={{width: '320px'}}/>
      <UsernameInput value={username} setValue={setUsername} />
      <PasswordInput value={password} setValue={setPassword}/>
      <FormAuthButton />
    </form>
  )
})