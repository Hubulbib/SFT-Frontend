import React from 'react'
import { ChangeItem } from '../../../shared'
import { ShowMoreButton } from '../../../features'
import './list-changes.css'

export const ListChanges = () => {
  return (
    <div className='list-changes'>
      <ul>
        <li><ChangeItem sku={'04623'} info={'Этап 1 Готов'} date={'5 фев 2023'} statusColor={'#006944'}/></li>
        <li><ChangeItem sku={'04623'} info={'SKU'} date={'5 фев 2023'} statusColor={'#006944'}/></li>
        <li><ChangeItem sku={'969090'} info={'Группа спецификации'} date={'1 фев 2023'} statusColor={'#FF5263'}/></li>
        <li><ChangeItem sku={'04623'} info={'Инициализация 04623'} date={'29 яев 2023'} statusColor={'#006944'}/></li>
        <li><ChangeItem sku={'969090'} info={'SKU'} date={'29 яев 2023'} statusColor={'#FF5263'}/></li>
        <li><ChangeItem sku={'969090'} info={'Группа спецификации'} date={'28 яев 2023'} statusColor={'#FF5263'}/></li>
        <li><ChangeItem sku={'969090'} info={'Инициализация 969090'} date={'28 яев 2023'} statusColor={'#FF5263'} isLast={true}/></li>
      </ul>
      <ShowMoreButton />
    </div>
  )
}