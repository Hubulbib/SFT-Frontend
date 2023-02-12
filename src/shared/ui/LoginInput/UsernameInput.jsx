import React from 'react'

export const UsernameInput = ({value, setValue}) => {
    return (
        <input className='form__input' autoComplete='username'
               value={value} onChange={e => setValue(e.target.value)}
               placeholder='Логин'
        />
    )
}