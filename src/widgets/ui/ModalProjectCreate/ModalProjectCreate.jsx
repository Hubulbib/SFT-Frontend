import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../shared'

export const ModalProjectCreate = observer(({ active, setModal }) => {

  const navigate = useNavigate()

  const [product, setProduct] = useState('')
  const [project, setProject] = useState('')
  const [group, setGroup] = useState('')
  const [sku, setSKU] = useState('')


  const onSubmitCreateBtn = event => {
    event.preventDefault()
    /*createProject({product, project, group, sku})
      .then(data => {
        navigate(`/project-base/${data._id}`)
      })
      .finally(() => {
        setModal(false)
      })*/
  }

  return (
    <div className={active ? 'user-base__modal active' : 'user-base__modal'}>
      <form className='user-base__modal__content' onSubmit={onSubmitCreateBtn}>
        <h1>Новый SKU</h1>
        <div>
          <label>Продукт</label>
          <input value={product} onChange={e => setProduct(e.target.value)}/>
        </div>
        <div>
          <label>Проект</label>
          <input value={project} onChange={e => setProject(e.target.value)}/>
        </div>
        <div>
          <label>Группа</label>
          <input value={group} onChange={e => setGroup(e.target.value)}/>
        </div>
        <div>
          <label>SKU</label>
          <input value={sku} onChange={e => setSKU(e.target.value)}/>
        </div>
        <div>
          <button
            type='submit'
            disabled={!(product && project && group && sku)}
          >
            Создать SKU
          </button>
          <button type='button' onClick={() => setModal(false)}>Отмена</button>
        </div>
      </form>
    </div>
  )
})