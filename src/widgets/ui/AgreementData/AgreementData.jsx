import React, { useState } from 'react'
import './agreement-data.css'
import { AgreementTextarea, AgreementTextareaColor } from '../../../shared'

export const AgreementData = ({isPepsiCo = false}) => {

    const [descEffect, setDescEffect] = useState('Повышение эффективности и скорости сборки на линии')
    const [group, setGroup] = useState('№1')
    const [nomenclature, setNomenclature] = useState('440023276')
    const [riskAssessment1, setRiskAssessment1] = useState('Эффективность замка')
    const [riskAssessment2, setRiskAssessment2] = useState('Удобство сборки')
    const [riskAssessment3, setRiskAssessment3] = useState('Скорость сборки')
    const [riskAssessment4, setRiskAssessment4] = useState('Итоговая оценка')
    const [nowStatus, setNowStatus] = useState('Протестирован SKU 440023276')
    const [nextSteps, setNextSteps] = useState('Оценка скорости сборки на линии покупателя. Ожидание новой даты рабочего выезда')

  return (
    <div className='agreement-data'>
      <AgreementTextarea placeholder={'Описание эффекта для PEPSICO'} disabled={isPepsiCo} value={descEffect} setValue={setDescEffect}/>
      <AgreementTextarea placeholder={'Группа Спецификаций'} disabled={isPepsiCo} value={group} setValue={setGroup}/>
      <AgreementTextarea placeholder={'Номенклатура SKU'} disabled={isPepsiCo} value={nomenclature} setValue={setNomenclature}/>
      <AgreementTextareaColor placeholder={'SFT Packaging'} styles={{backgroundColor: '#006944'}} disabled={isPepsiCo}/>
      <AgreementTextareaColor styles={{backgroundColor: '#006944'}} disabled={isPepsiCo}/>
      <AgreementTextareaColor styles={{backgroundColor: '#006944'}} disabled={isPepsiCo}/>
      <AgreementTextareaColor placeholder={'Итог'} styles={{backgroundColor: '#006944'}} disabled={isPepsiCo}/>
      <AgreementTextareaColor placeholder={'PEPSICO'} styles={{backgroundColor: '#F1BD6C'}} disabled={isPepsiCo}/>
      <AgreementTextareaColor placeholder={'Оценка через тест'} styles={{backgroundColor: '#F1BD6C'}} disabled={isPepsiCo}/>
      <AgreementTextareaColor placeholder={'Оценка через тест'} styles={{backgroundColor: '#F1BD6C'}} disabled={isPepsiCo}/>
      <AgreementTextareaColor styles={{backgroundColor: '#006944'}} disabled={isPepsiCo}/>
      <AgreementTextarea placeholder={'Оценка рисков'} disabled={isPepsiCo} value={riskAssessment1} setValue={setRiskAssessment1}/>
      <AgreementTextarea placeholder={'Оценка рисков'} disabled={isPepsiCo} value={riskAssessment2} setValue={setRiskAssessment2}/>
      <AgreementTextarea placeholder={'Оценка рисков'} disabled={isPepsiCo} value={riskAssessment3} setValue={setRiskAssessment3}/>
      <AgreementTextarea placeholder={'Оценка рисков'} disabled={isPepsiCo} value={riskAssessment4} setValue={setRiskAssessment4} />
      <AgreementTextarea placeholder={'Текущий статус'} disabled={isPepsiCo} value={nowStatus} setValue={setNowStatus}/>
      <AgreementTextarea placeholder={'Дальнейшие шаги'} disabled={isPepsiCo} value={nextSteps} setValue={setNextSteps}/>
    </div>
  )
}