import React from 'react'
import { SKUPageTitle } from '../../../shared'
import { SKUCreateForm } from '../../../widgets'
import './create-sku-page.css'

export const CreateSKUPage = () => {
  return (
    <div className='create-sku-page'>
      <SKUPageTitle title={'Создание SKU'}/>
      <SKUCreateForm />
    </div>
  )
}