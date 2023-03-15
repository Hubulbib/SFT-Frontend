import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import './modal-employee-create.css'
import { Context } from '../../../shared'

export const ModalEmployeeCreate = observer(({ active, setModal }) => {

  const navigate = useNavigate()

  const {employeeStore: {createUser, getUserById}} = useContext(Context)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [role, setRole] = useState('sft-employee')

  const onSubmitCreateBtn = event => {
    event.preventDefault()
    createUser({username, password, fullName, phone, email, department, role})
      .then(data => {
        getUserById(data)
          .then(() => navigate(`/employee-base/${data}`))
      })
  }

  return (
    <div className={active ? 'user-base__modal active' : 'user-base__modal'}>
      <form className='user-base__modal__content' onSubmit={onSubmitCreateBtn}>
        <h1>Новый пользователь</h1>
        <div>
          <label>Имя пользователя</label>
          <input placeholder='Введите имя пользователя' type='text' value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label>Пароль</label>
          <input placeholder='Введите пароль' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          <label>ФИО</label>
          <input placeholder='Введите ФИО' type='text' value={fullName} onChange={e => setFullName(e.target.value)}/>
        </div>
        <div>
          <label>Номер телефона</label>
          <input placeholder='Введите номер телефона' type='tel' value={phone} onChange={e => setPhone(e.target.value)}/>
        </div>
        <div>
          <label>Адрес электронной почты</label>
          <input placeholder='Введите email' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Отдел</label>
          <input placeholder='Введите название отдела' type='text' value={department} onChange={e => setDepartment(e.target.value)}/>
        </div>
        <div>
          <label>Роль</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value={'sft-employee'}>Работник SFT</option>
            <option value={'pepsico'}>Работник PepsiCo</option>
          </select>
        </div>
        <div>
          <button
            type='submit'
            disabled={!(username && password && fullName && phone && email && role)}
          >
            Создать запись
          </button>
          <button type='button' onClick={() => setModal(false)}>Отмена</button>
        </div>
      </form>
    </div>
  )
})