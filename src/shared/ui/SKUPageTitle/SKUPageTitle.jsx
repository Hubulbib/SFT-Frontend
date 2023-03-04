import React from 'react'
import './sku-page-title.css'

export const SKUPageTitle = ({title = ''}) => {
  return (
    <>
    <div className='sku-page__title'><h1>{title}</h1></div>
    <hr />
    </>
  )
}