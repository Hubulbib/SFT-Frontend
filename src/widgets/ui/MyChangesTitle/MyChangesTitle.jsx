import React from 'react'
import { Icon } from '../../../shared'
import { SearchChanges } from '../../../features'
import { PersonImage } from '../../../shared'
import './my-changes-title.css'

export const MyChangesTitle = () => {
  return (
    <div className='my-changes-title'>
      <Icon icon={PersonImage} alt={'person'}/>
      <h1>Мои изменения</h1>
      <SearchChanges />
    </div>
  )
}