import React, { useState } from 'react'
import { SelectChoose } from '../../../shared'
import { SearchSKUBySelectButton } from '../../../features'
import './search-sku-by-select.css'

const ProductList = [
  'Snacks', 'Juice', 'Diary'
]

const ProjectList = [
  'Оптимизация печати', 'Логистика', 'Состав картона'
]

const GroupList = [
  'Группа спецификации 2'
]

export const SearchSKUBySelect = () => {

  const [product, setProduct] = useState(ProductList[0])
  const [project, setProject] = useState(ProjectList[0])
  const [group, setGroup] = useState(GroupList[0])

  return (
    <div className='search-sku-page__content__by-select'>
        <h1>Введите номер SKU</h1>
        <ul>
          <li><SelectChoose value={product} setValue={setProduct} list={ProductList}/></li>
          <li><SelectChoose value={project} setValue={setProject} list={ProjectList}/></li>
          <li><SelectChoose value={group} setValue={setGroup} list={GroupList}/></li>
        </ul>
      <SearchSKUBySelectButton />
    </div>
  )
}