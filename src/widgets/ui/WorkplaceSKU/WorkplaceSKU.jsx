import React, { useState } from 'react'
import { ButtonWithIcon, ProjectTextarea } from '../../../shared'
import { SKUTable } from '../SKUTable/SKUTable'
import SettingsIcon from '../../lib/assets/settings-icon.svg'
import './workplace-sku.css'

export const WorkplaceSKU = ({isPepsiCo = false}) => {

  const [desc, setDesc] = useState('')

  return (
    <div className='workplace-sku'>
      <ProjectTextarea value={desc} setValue={setDesc} placeholder={'Описание проекта'} disabled={isPepsiCo}/>
      <SKUTable isPepsiCo={isPepsiCo}/>
      {!isPepsiCo ? <ButtonWithIcon icon={SettingsIcon} alt={'settings'} title={'Изменить'}/> : null}
    </div>
  )
}