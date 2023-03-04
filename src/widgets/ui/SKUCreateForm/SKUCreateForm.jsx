import React, { useState } from 'react'
import { SelectChoose, SKUInput } from '../../../shared'
import { CreateSKUButton } from '../../../features'
import './sku-create-form.css'

const ProductList = [
  'Snacks', 'Juice', 'Diary'
]

const ProjectList = [
  'Оптимизация печати', 'Логистика', 'Состав картона'
]

const GroupList = [
  'Группа спецификации 2'
]

export const SKUCreateForm = () => {

  const [product, setProduct] = useState(ProductList[0])
  const [project, setProject] = useState(ProjectList[0])
  const [group, setGroup] = useState(GroupList[0])
  const [sku, setSKU] = useState('')

  const onClickSubmitForm = e => {
    e.preventDefault()
  }

  return (
    <form className='create-sku-page__content' onSubmit={onClickSubmitForm}>
      <div className='create-sku-page__content__field'>
        <h1>Заполните поля</h1>
        <ul>
          <li><SelectChoose value={product} setValue={setProduct} list={ProductList}/></li>
          <li><SelectChoose value={project} setValue={setProject} list={ProjectList}/></li>
          <li><SelectChoose value={group} setValue={setGroup} list={GroupList}/></li>
        </ul>
      </div>
      <div className='create-sku-page__content__field'>
        <h1>Введите номер SKU</h1>
        <SKUInput value={sku} setValue={setSKU}/>
      </div>
      <CreateSKUButton />
    </form>
  )
}