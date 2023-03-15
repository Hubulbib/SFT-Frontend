import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { DeleteIcon } from '../../../shared'
import './sku-page.css'

export const SKUPage = observer(() => {

  const {id} = useParams()
  const navigate = useNavigate()

  /*const {adminProjectStore: {getById, project, deleteProject}} = useContext(Context)*/

  /*useEffect(() => {
    getById(id)
  }, [])

  const onClickDelete = () => {
    deleteProject(id)
      .then(() => navigate('/admin/project-base'))
  }

  return (
    <div className='admin-project'>
      <div>
        <ul className='admin-project__list'>
          <li>
            <h1>ID</h1>
            <h1>{project._id}</h1>
          </li>
          <li>
            <h1>Продукт</h1>
            <h1>{project.product}</h1>
          </li>
          <li>
            <h1>Проект</h1>
            <h1>{project.project}</h1>
          </li>
          <li>
            <h1>Группа</h1>
            <h1>{project.group}</h1>
          </li>
          <li>
            <h1>SKU</h1>
            <h1>{project.sku}</h1>
          </li>
        </ul>
        <button onDoubleClick={onClickDelete}><img src={DeleteIcon} alt='delete'/></button>
      </div>
    </div>
  )
  */
})