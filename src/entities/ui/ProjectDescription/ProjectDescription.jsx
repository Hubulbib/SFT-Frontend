import React, { useState } from 'react'
import { ProjectTextarea } from '../../../shared'

export const ProjectDescription = ({isPepsiCo = false}) => {

  const [desc, setDesc] = useState('Изменения замка крышки короба')

  return (
    <ProjectTextarea value={desc} setValue={setDesc} placeholder={'Описание проекта'} disabled={isPepsiCo}/>
  )
}