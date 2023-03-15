import React, { useState } from 'react'
import { DataGridProjectBase, ModalProjectCreate } from '../../../widgets'

export const SKUBasePage = () => {

  const [activeModal, setActiveModal] = useState(false)

  return (
    <div className='user-base'>
      <div className='user-base__card'>
        <div className='user-base__card__btn-plus'>
          <button onClick={() => setActiveModal(true)}>+</button>
        </div>
        <DataGridProjectBase />
      </div>
      <ModalProjectCreate active={activeModal} setModal={setActiveModal}/>
    </div>
  )
}