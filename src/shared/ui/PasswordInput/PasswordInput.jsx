import React from 'react'

export const PasswordInput = ({value, setValue}) => {
    return (
        <input className='form__input' type='password' autoComplete='password'
               value={value} onChange={e => setValue(e.target.value)}
               placeholder='Пароль'
        />
    )
}