import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Grid } from 'gridjs-react'
import { Context } from '../../../shared'
import './data-grid-employee-base.css'

export const DataGridEmployeeBase = observer(() => {

  const navigate = useNavigate()
  const {employeeStore: {getAllUsers, userList}} = useContext(Context)

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  return (
    <>
    <Grid
      data={userList}
      columns={['ID', 'Логин', 'ФИО', 'Номер телефона', 'Email']}
      sort={true}
      pagination={{
        enabled: true,
        limit: 8
      }}
      search={true}
      eventEmitter={{
        emit(event, ...args) {
          if (event === 'rowClick') {
            navigate(`/employee-base/${args[1]._cells[0].data}`)
          }
        }
      }}
    />
    </>
  )
})