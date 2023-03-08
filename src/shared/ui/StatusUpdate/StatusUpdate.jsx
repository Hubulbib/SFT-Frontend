import React from 'react'
import './status-update.css'

export const StatusUpdate = ({statusColor = 'white', isLine = true, eventTitle = '', eventPerson = '', eventDate = ''}) => {
  return (
    <div className='status-update'>
      <div className='status-update__left'>
        <span style={{backgroundColor: statusColor}} className='status-update__left__status'/>
        {isLine ? <span className='status-update__left__line'/> : null}
      </div>
      <div className='status-update__right'>
        <h1 className='status-update__right__title'>{eventTitle}</h1>
        <h1 className='status-update__right__info'>{eventPerson} - {eventDate}</h1>
      </div>
    </div>
  )
}