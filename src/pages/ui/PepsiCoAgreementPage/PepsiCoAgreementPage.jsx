import React from 'react'
import './pepsico-agreement-page.css'
import { AgreementCard } from '../../../widgets'

export const PepsiCoAgreementPage = () => {
  return (
    <div className='pepsico-agreement-page'>
      <AgreementCard
        title={'14 мар'} statusColor={'#FF5263'} statusTitle={'Отстает'}
        statusUpdatePerson={'Бартенев Никита'} statusUpdateDate={'10.03.23'}
        stageStatusColor={'#FF5263'} stageName={'Этап 2'} project={'Проект || “Конструктив.Замок”'}
        sku={'440023276'} desc={'Изменения замка крышки короба'}
      />
      <AgreementCard
        title={'14 фев'} statusColor={'#006944'} statusTitle={'Согласован'}
        statusUpdatePerson={'Бартенев Никита'} statusUpdateDate={'10.03.23'}
        stageStatusColor={'#006944'} stageName={'Этап 1'} project={'Проект || “Конструктив.Замок”'}
        sku={'440023276'} desc={'Изменения замка крышки короба'}
      />
    </div>
  )
}