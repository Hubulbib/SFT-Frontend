import React from 'react'
import './agreement-data.css'
import { AgreementTextarea, AgreementTextareaColor } from '../../../shared'

export const AgreementData = () => {
  return (
    <div className='agreement-data'>
      <AgreementTextarea placeholder={'Описание эффекта для PEPSICO'}/>
      <AgreementTextarea placeholder={'Группа Спецификаций'}/>
      <AgreementTextarea placeholder={'Номенклатура SKU'}/>
      <AgreementTextareaColor placeholder={'SFT Packaging'} styles={{backgroundColor: '#006944'}}/>
      <AgreementTextareaColor styles={{backgroundColor: '#006944'}}/>
      <AgreementTextareaColor styles={{backgroundColor: '#006944'}}/>
      <AgreementTextareaColor placeholder={'Итог'} styles={{backgroundColor: '#006944'}}/>
      <AgreementTextareaColor placeholder={'PEPSICO'} styles={{backgroundColor: '#F1BD6C'}}/>
      <AgreementTextareaColor placeholder={'Оценка через тест'} styles={{backgroundColor: '#F1BD6C'}}/>
      <AgreementTextareaColor placeholder={'Оценка через тест'} styles={{backgroundColor: '#F1BD6C'}}/>
      <AgreementTextareaColor styles={{backgroundColor: '#F1BD6C'}}/>
      <AgreementTextarea placeholder={'Оценка рисков'}/>
      <AgreementTextarea placeholder={'Оценка рисков'}/>
      <AgreementTextarea placeholder={'Оценка рисков'}/>
      <AgreementTextarea placeholder={'Оценка рисков'}/>
      <AgreementTextarea placeholder={'Текущий статус'}/>
      <AgreementTextarea placeholder={'Дальнейшие шаги'}/>
    </div>
  )
}