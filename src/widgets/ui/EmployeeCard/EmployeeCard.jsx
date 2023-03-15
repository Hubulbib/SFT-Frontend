import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context, PersonImage } from '../../../shared'
import SettingsIcon from '../../lib/assets/settings-icon.svg'

export const EmployeeCard = observer(() => {

  const {id} = useParams()

  const {employeeStore: {getUserById, user, editUser}} = useContext(Context)

  const [editActive, setEditActive] = useState(false)

  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    getUserById(id)
  }, [getUserById, id])

  useEffect(() => {
    setUsername(user.username)
    setFullName(user.fullName)
    setPhone(user.phone)
    setEmail(user.email)
    setRole(user.role)
  }, [user.username, user.fullName, user.phone, user.email, user.role])

  const onClickEditBtn = () => {
    editUser(id, {username, fullName, phone, email, role})
      .then(() => setEditActive(false))
  }

  return (
    <div className='person'>
      <h1 className='person__title'>Карточка сотрудника</h1>
      <div className='person__content content'>
        <div className='content__img'>
          <img src={PersonImage} alt='person' />
        </div>
        <div className='content__title'>
          <input type='text' value={fullName} onChange={e => setFullName(e.target.value)} disabled={!editActive}/>
        </div>
        <div className='content__data'>
          <div className='content__data-item'>
            <label htmlFor='login-input'>Логин: </label>
            <input
              name='textfield' type='text' id='login-input' value={username}
              onChange={e => setUsername(e.target.value)} disabled={!editActive}
            />
          </div>
          <div className='content__data-item'>
            <label htmlFor='mail-input'>Email: </label>
            <input type="email" id='mail-input' value={email} onChange={e => setEmail(e.target.value)} disabled={!editActive}/>
          </div>
          <div className='content__data-item'>
            <label htmlFor='phone-input'>Номер телефона:</label>
            <input type="tel" id='phone-input' value={phone} onChange={e => setPhone(e.target.value)} disabled={!editActive}/>
          </div>
          <div className='content__data-item'>
            <label htmlFor='access-input'>Роль:</label>
            <select id='access-input' value={role} onChange={(e) => setRole(e.target.value)} disabled={!editActive}>
              <option value={'sft-employee'}>Работник SFT</option>
              <option value={'pepsico'}>Работник PepsiCo</option>
            </select>
          </div>
        </div>
        <div className={!editActive ? 'content__change-btn' : 'content__change-btn active'}
             onClick={!editActive ? () => setEditActive(prev => !prev) : onClickEditBtn}
        >
          <img src={SettingsIcon} alt='settings'/>
          <span>{editActive ? 'Сохранить' : 'Изменить'}</span>
        </div>
      </div>
    </div>
  )
})