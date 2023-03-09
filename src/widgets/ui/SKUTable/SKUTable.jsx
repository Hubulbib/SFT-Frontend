import React, { useState } from 'react'
import { InputNoBorder, PickColor } from '../../../shared'
import './sku-table.css'

export const SKUTable = () => {

  const [packagePercent, setPackagePercent] = useState('')
  const [packageSum, setPackageSum] = useState('')
  const [packageAmount, setPackageAmount] = useState('')
  const [packageStatus, setPackageStatus] = useState('')
  const [packageRisk, setPackageRisk] = useState('')
  const [packageRiskSFT, setPackageRiskSFT] = useState('none')
  const [packageRiskPepsico, setPackageRiskPepsico] = useState('none')

  const [constructivePercent, setConstructivePercent] = useState('')
  const [constructiveSum, setConstructiveSum] = useState('')
  const [constructiveAmount, setConstructiveAmount] = useState('')
  const [constructiveStatus, setConstructiveStatus] = useState('')
  const [constructiveRisk, setConstructiveRisk] = useState('')
  const [constructiveRiskSFT, setConstructiveRiskSFT] = useState('none')
  const [constructiveRiskPepsico, setConstructiveRiskPepsico] = useState('none')

  const [layoutPercent, setLayoutPercent] = useState('')
  const [layoutSum, setLayoutSum] = useState('')
  const [layoutAmount, setLayoutAmount] = useState('')
  const [layoutStatus, setLayoutStatus] = useState('')
  const [layoutRisk, setLayoutRisk] = useState('')
  const [layoutRiskSFT, setLayoutRiskSFT] = useState('none')
  const [layoutRiskPepsico, setLayoutRiskPepsico] = useState('none')

  const [printPercent, setPrintPercent] = useState('')
  const [printSum, setPrintSum] = useState('')
  const [printAmount, setPrintAmount] = useState('')
  const [printStatus, setPrintStatus] = useState('')
  const [printRisk, setPrintRisk] = useState('')
  const [printRiskSFT, setPrintRiskSFT] = useState('none')
  const [printRiskPepsico, setPrintRiskPepsico] = useState('none')

  const [totalPercent, setTotalPercent] = useState('')
  const [totalSum, setTotalSum] = useState('')
  const [totalAmount, setTotalAmount] = useState('')
  const [totalStatus, setTotalStatus] = useState('')
  const [totalRisk, setTotalRisk] = useState('')
  const [totalRiskSFT, setTotalRiskSFT] = useState('none')
  const [totalRiskPepsico, setTotalRiskPepsico] = useState('none')

  return (
    <table className='sku-table'>
      <thead>
        <tr>
          <th></th>
          <th>Упаковка</th>
          <th>Конструктив</th>
          <th>Комп. сырья</th>
          <th>Печать</th>
          <th>Итого</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>%</td>
          <td><InputNoBorder value={packagePercent} setValue={setPackagePercent}/></td>
          <td><InputNoBorder value={constructivePercent} setValue={setConstructivePercent}/></td>
          <td><InputNoBorder value={layoutPercent} setValue={setLayoutPercent}/></td>
          <td><InputNoBorder value={printPercent} setValue={setPrintPercent}/></td>
          <td><InputNoBorder value={totalPercent} setValue={setTotalPercent}/></td>
        </tr>
        <tr>
          <td>Млн. Р</td>
          <td><InputNoBorder value={packageSum} setValue={setPackageSum}/></td>
          <td><InputNoBorder value={constructiveSum} setValue={setConstructiveSum}/></td>
          <td><InputNoBorder value={layoutSum} setValue={setLayoutSum}/></td>
          <td><InputNoBorder value={printSum} setValue={setPrintSum}/></td>
          <td><InputNoBorder value={totalSum} setValue={setTotalSum}/></td>
        </tr>
        <tr>
          <td>Штуки</td>
          <td><InputNoBorder value={packageAmount} setValue={setPackageAmount}/></td>
          <td><InputNoBorder value={constructiveAmount} setValue={setConstructiveAmount}/></td>
          <td><InputNoBorder value={layoutAmount} setValue={setLayoutAmount}/></td>
          <td><InputNoBorder value={printAmount} setValue={setPrintAmount}/></td>
          <td><InputNoBorder value={totalAmount} setValue={setTotalAmount}/></td>
        </tr>
        <tr>
          <td>Статус</td>
          <td><InputNoBorder value={packageStatus} setValue={setPackageStatus}/></td>
          <td><InputNoBorder value={constructiveStatus} setValue={setConstructiveStatus}/></td>
          <td><InputNoBorder value={layoutStatus} setValue={setLayoutStatus}/></td>
          <td><InputNoBorder value={printStatus} setValue={setPrintStatus}/></td>
          <td><InputNoBorder value={totalStatus} setValue={setTotalStatus}/></td>
        </tr>
        <tr>
          <td>Риски</td>
          <td><InputNoBorder value={packageRisk} setValue={setPackageRisk}/></td>
          <td><InputNoBorder value={constructiveRisk} setValue={setConstructiveRisk}/></td>
          <td><InputNoBorder value={layoutRisk} setValue={setLayoutRisk}/></td>
          <td><InputNoBorder value={printRisk} setValue={setPrintRisk}/></td>
          <td><InputNoBorder value={totalRisk} setValue={setTotalRisk}/></td>
        </tr>
        <tr>
          <td>Риски SFT</td>
          <td><PickColor value={packageRiskSFT} setValue={setPackageRiskSFT}/></td>
          <td><PickColor value={constructiveRiskSFT} setValue={setConstructiveRiskSFT}/></td>
          <td><PickColor value={layoutRiskSFT} setValue={setLayoutRiskSFT}/></td>
          <td><PickColor value={printRiskSFT} setValue={setPrintRiskSFT}/></td>
          <td><PickColor value={totalRiskSFT} setValue={setTotalRiskSFT}/></td>
        </tr>
        <tr>
          <td>Риски PEPSICO</td>
          <td><PickColor value={packageRiskPepsico} setValue={setPackageRiskPepsico}/></td>
          <td><PickColor value={constructiveRiskPepsico} setValue={setConstructiveRiskPepsico}/></td>
          <td><PickColor value={layoutRiskPepsico} setValue={setLayoutRiskPepsico}/></td>
          <td><PickColor value={printRiskPepsico} setValue={setPrintRiskPepsico}/></td>
          <td><PickColor value={totalRiskPepsico} setValue={setTotalRiskPepsico}/></td>
        </tr>
      </tbody>
    </table>
  )
}