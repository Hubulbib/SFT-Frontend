import React from 'react'
import { Grid } from 'gridjs-react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

export const DataGridProjectBase = observer(() => {

  const navigate = useNavigate()
  /*const {adminProjectStore: {getAll, projectList, isLoadingAdmin}} = useContext(Context)*/

  /*useEffect(() => {
    getAll()
  }, [getAll])*/

  return (
    <>
      <Grid
        style={{}}
        data={[]}
        /*data={projectList.map(el => [el._id, el.product, el.project, el.group, el.sku])}*/
        columns={['ID', 'Продукт', 'Проект', 'Группа', 'SKU']}
        sort={true}
        pagination={{
          enabled: true,
          limit: 8
        }}
        search={true}
        eventEmitter={{
          emit(event, ...args) {
            if (event === 'rowClick') {
              navigate(`/admin/project-base/${args[1]._cells[0].data}`)
            }
          }
        }}
      />
    </>
  )
})