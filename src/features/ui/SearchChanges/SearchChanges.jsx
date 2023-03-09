import React, { useState } from 'react'
import { InputSearchSmall } from '../../../shared'

export const SearchChanges = () => {

  const [search, setSearch] = useState('')

  return (
    <InputSearchSmall
      value={search} setValue={setSearch} placeholder={'Поиск'}
      styles={{width: '300px', height: '30px', fontSize: '12px', textAlign: 'start', padding: '10px 20px'}}
    />
  )
}