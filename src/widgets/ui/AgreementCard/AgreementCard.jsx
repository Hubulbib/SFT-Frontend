import React, { useContext } from 'react'
import './agreement-card.css'
import { ButtonWithIcon, Context, ProjectMember, StageCard, StatusInfo } from '../../../shared'
import { PersonImage } from '../../../shared'
import { AgreementIcon } from '../../../features'
import { CancelIcon } from '../../../shared'
import { useNavigate } from 'react-router-dom'

export const AgreementCard = (
  {
    title = '', statusTitle = '', statusColor = 'white', project = '', sku = '',
    stageName = '', stageStatusColor = 'none', statusUpdatePerson = '',
    statusUpdateDate = '', desc = ''
  }
) => {

  const navigate = useNavigate()

  const {workplaceNavigationStore: {setActiveTab}, workplaceStore: {setActiveStage}} = useContext(Context)

  return (
    <div className='agreement-card'>
      <h1 className='agreement-card__title'>Запрос согласования - {title}</h1>
      <ProjectMember image={PersonImage} name={'Бартенев Никита'}/>
      <div className='agreement-card__status'>
        <h1>Статус</h1>
        <StatusInfo  title={statusTitle} statusColor={statusColor} styles={{border: 'none', padding: 0}}/>
      </div>
      <div className='agreement-card__info'>
        <h1>Проект {project}</h1>
        <h1>SKU {sku}</h1>
      </div>
      <div className='agreement-card__stage' onClick={() => { setActiveTab('project'); setActiveStage(+stageName.split(' ')[1] || 1); navigate('/workplace') }}>
        <StageCard stageName={stageName} status={stageStatusColor} statusUpdatePerson={statusUpdatePerson} statusUpdateDate={statusUpdateDate}/>
      </div>
      <div className='agreement-card__desc'>
        <h1>Описание проекта</h1>
        <h1>{desc}</h1>
      </div>
      {
        statusTitle !== 'Согласован' && statusTitle !== 'Отклонен'
          ?
          <div className='agreement-card__button'>
            <ButtonWithIcon icon={AgreementIcon} title={'Согласовать'}/>
            <ButtonWithIcon icon={CancelIcon} title={'Отклонить'}/>
          </div>
          : <h1 className='agreement-card__result' style={
            statusTitle === 'Согласован' ? {color: '#006944'} : {color: '#FF5263'}
          }>{statusTitle}</h1>
      }
    </div>
  )
}