import React from 'react'
import './stage-card.css'

export const StageCard = ({status = 'none', stageName = '', statusUpdateDate = '', statusUpdatePerson = ''}) => {
  return (
    <div className='stage-card'>
      <span style={{backgroundColor: status !== 'none' ? status : 'white'}}/>
      <div className='stage-card__title'>
        <h1>{stageName}</h1>
        <h1>Обновление статуса - {statusUpdateDate} · {statusUpdatePerson}</h1>
      </div>
    </div>
  )
}