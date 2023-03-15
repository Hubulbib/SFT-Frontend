import React from 'react'
import { StageCard } from '../../../shared'
import './choose-sku.css'

export const ChooseSKU = () => {
  return (
    <div className='choose-sku'>
      <h1>Группа спецификации {}</h1>
      <div className='choose-sku__content'>
        <StageCard stageName={'SKU 440023276'} status={'#FF5263'} statusUpdateDate={'10.03.23'} statusUpdatePerson={'Бартенев Никита'}/>
        <StageCard stageName={'SKU 440023304'} status={'#006944'} statusUpdateDate={'10.04.24'} statusUpdatePerson={'Бартенев Никита'}/>
      </div>
    </div>
  )
}