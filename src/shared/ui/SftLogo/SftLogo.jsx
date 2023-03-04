import React from 'react'
import SftLogoImage from '../../lib/assets/sft-packaging-logo.svg'
import './sft-logo.css'

export const SftLogo = (props) => {
    return (
        <img className='sft-logo' src={SftLogoImage} alt='sft packaging' {...props}/>
    )
}