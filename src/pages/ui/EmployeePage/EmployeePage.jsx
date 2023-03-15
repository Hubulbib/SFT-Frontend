import React from 'react'
import { EmployeeCard } from '../../../widgets'
import './employee-page.css'

export const EmployeePage = () => {
  return (
    <div className='employee-page'>
      <div className='container'>
        <EmployeeCard />
      </div>
    </div>
  )
}