import React from 'react'
import { MyChangesTitle } from '../MyChangesTitle/MyChangesTitle'
import { ListChanges } from '../ListChanges/ListChanges'
import './my-changes.css'

export const MyChanges = () => {
  return (
    <div className='my-changes'>
      <MyChangesTitle />
      <hr color={'#A5A5A7'}/>
      <ListChanges />
    </div>
  )
}