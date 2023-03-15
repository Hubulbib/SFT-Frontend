import React, { useState } from 'react'
import { DataGridEmployeeBase } from '../../../widgets'
import { ModalEmployeeCreate } from '../../../widgets'
import './employee-base.css'

export const EmployeeBasePage = () => {

  const [activeModal, setActiveModal] = useState(false)

  return (
    <div className='user-base'>
      <div className='user-base__card'>
        <div className='user-base__card__btn-plus'>
          <button onClick={() => setActiveModal(true)}>+</button>
        </div>
        <DataGridEmployeeBase />
      </div>
      <ModalEmployeeCreate active={activeModal} setModal={setActiveModal}/>
    </div>
  )
}