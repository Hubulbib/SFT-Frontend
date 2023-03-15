import React from 'react'
import SftLogoImage from '../../lib/assets/sft-packaging-logo.svg'
import { SFTLogoBlack } from '../../index'
import './sft-logo.css'

export const SftLogo = ({styles, color = 'white'}) => {
    return (
        <img className='sft-logo' src={color === 'white' ? SftLogoImage : SFTLogoBlack} alt='sft packaging' style={styles}/>
    )
}