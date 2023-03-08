import React from 'react'
import MemberIcon from '../../lib/assets/member-icon.svg'
import './join-member.css'

export const JoinMember = ({isLine = true, eventTitle = '', eventPerson = '', eventDate = '', eventPersonIcon, eventPersonIconAlt}) => {
  return (
    <div className='join-member'>
      <div className='join-member__left'>
        <img className='join-member__left__icon' src={MemberIcon} alt={'member-icon'}/>
        {isLine ? <span className='join-member__left__line'/> : null}
      </div>
      <div className='join-member__right'>
        <h1 className='join-member__right__title'>{eventTitle}</h1>
        <h1 className='join-member__right__person'>{eventPerson}</h1>
        <h1 className='join-member__right__date'>{eventDate}</h1>
        <img className='join-member__right__person-icon' src={eventPersonIcon} alt={eventPersonIconAlt}/>
      </div>
    </div>
  )
}