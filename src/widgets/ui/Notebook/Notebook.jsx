import React, { useState } from 'react'
import { TextareaNoBorder } from '../../../shared'
import './notebook.css'

export const Notebook = () => {

  const [note, setNote] = useState('')

  return (
    <div className='notebook'>
      <h1>Блокнот</h1>
      <TextareaNoBorder value={note} setValue={setNote} placeholder={'Добавьте краткую заметку или ссылку на важный ресурс'}/>
    </div>
  )
}