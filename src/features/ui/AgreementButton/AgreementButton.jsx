import React from 'react'
import { ButtonWithIcon } from '../../../shared'
import AgreementIcon from '../../lib/assets/agreement-icon.svg'

export const AgreementButton = () => {
  return (
    <ButtonWithIcon title={'Согласовать'} icon={AgreementIcon} alt={'Agreement'}/>
  )
}