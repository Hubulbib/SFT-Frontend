import React, { useState } from 'react'
import { ButtonWithIcon, ProjectTextarea } from '../../../shared'
import { SKUTable } from '../SKUTable/SKUTable'
import SettingsIcon from '../../lib/assets/settings-icon.svg'
import './workplace-sku.css'

export const WorkplaceSKU = () => {

  const [desc, setDesc] = useState('')

  return (
    <div className='workplace-sku'>
      <ProjectTextarea value={desc} setValue={setDesc} placeholder={'Описание проекта'}/>
      <SKUTable />
      <ButtonWithIcon icon={SettingsIcon} alt={'settings'} title={'Изменить'}/>
    </div>
  )
}