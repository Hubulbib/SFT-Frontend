import React from 'react'
import FileIcon from '../../lib/assets/file-icon.svg'
import './file-card.css'

export const FileCard = ({fileName = '', statusUpdateDate = '', statusUpdatePerson = ''}) => {
  return (
    <div className='file-card'>
      <div className='file-card__info'>
        <div className='file-card__info__icon'>
          <img src={FileIcon} alt='file'/>
        </div>
        <div className='file-card__info__title'>
          <h1>{fileName}</h1>
          <h1>Обновление статуса - {statusUpdateDate} · {statusUpdatePerson}</h1>
        </div>
      </div>
      <div className='file-card__preview'>
        <div />
      </div>
    </div>
  )
}