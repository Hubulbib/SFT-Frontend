import React, { useState } from 'react'
import { ProjectTextarea } from '../../../shared'

export const ProjectDescription = () => {

  const [desc, setDesc] = useState('')

  return (
    <ProjectTextarea value={desc} setValue={setDesc} placeholder={'Описание проекта'}/>
  )
}