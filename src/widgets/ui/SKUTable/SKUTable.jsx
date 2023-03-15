import React, { useState } from 'react'
import { InputNoBorder, PickColor } from '../../../shared'
import './sku-table.css'

export const SKUTable = ({isPepsiCo = false}) => {

  const [packagePercent, setPackagePercent] = useState('0.21')
  const [packageSum, setPackageSum] = useState('0.073')
  const [packageAmount, setPackageAmount] = useState('')
  const [packageStatus, setPackageStatus] = useState('2 этап/завершено')
  const [packageRisk, setPackageRisk] = useState('Логистика')
  const [packageRiskSFT, setPackageRiskSFT] = useState('small')
  const [packageRiskPepsico, setPackageRiskPepsico] = useState('middle')

  const [constructivePercent, setConstructivePercent] = useState('0.4')
  const [constructiveSum, setConstructiveSum] = useState('0.14')
  const [constructiveAmount, setConstructiveAmount] = useState('')
  const [constructiveStatus, setConstructiveStatus] = useState('2 этап/завершено')
  const [constructiveRisk, setConstructiveRisk] = useState('Производство')
  const [constructiveRiskSFT, setConstructiveRiskSFT] = useState('small')
  const [constructiveRiskPepsico, setConstructiveRiskPepsico] = useState('small')

  const [layoutPercent, setLayoutPercent] = useState('1.29')
  const [layoutSum, setLayoutSum] = useState('0.442')
  const [layoutAmount, setLayoutAmount] = useState('676480')
  const [layoutStatus, setLayoutStatus] = useState('2 этап/завершено')
  const [layoutRisk, setLayoutRisk] = useState('Прочность')
  const [layoutRiskSFT, setLayoutRiskSFT] = useState('middle')
  const [layoutRiskPepsico, setLayoutRiskPepsico] = useState('middle')

  const [printPercent, setPrintPercent] = useState('2.14')
  const [printSum, setPrintSum] = useState('0.731')
  const [printAmount, setPrintAmount] = useState('')
  const [printStatus, setPrintStatus] = useState('2 этап/завершено')
  const [printRisk, setPrintRisk] = useState('Маркетинг')
  const [printRiskSFT, setPrintRiskSFT] = useState('small')
  const [printRiskPepsico, setPrintRiskPepsico] = useState('middle')

  const [totalPercent, setTotalPercent] = useState('4.04')
  const [totalSum, setTotalSum] = useState('1.386')
  const [totalAmount, setTotalAmount] = useState('')
  const [totalStatus, setTotalStatus] = useState('2 этап/завершено')
  const [totalRisk, setTotalRisk] = useState('Экологичность')
  const [totalRiskSFT, setTotalRiskSFT] = useState('small')
  const [totalRiskPepsico, setTotalRiskPepsico] = useState('small')

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
          <td><InputNoBorder value={packagePercent} setValue={setPackagePercent} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={constructivePercent} setValue={setConstructivePercent} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={layoutPercent} setValue={setLayoutPercent} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={printPercent} setValue={setPrintPercent} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={totalPercent} setValue={setTotalPercent} disabled={isPepsiCo}/></td>
        </tr>
        <tr>
          <td>Млн. Р</td>
          <td><InputNoBorder value={packageSum} setValue={setPackageSum} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={constructiveSum} setValue={setConstructiveSum} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={layoutSum} setValue={setLayoutSum} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={printSum} setValue={setPrintSum} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={totalSum} setValue={setTotalSum} disabled={isPepsiCo}/></td>
        </tr>
        <tr>
          <td>Штуки</td>
          <td><InputNoBorder value={packageAmount} setValue={setPackageAmount} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={constructiveAmount} setValue={setConstructiveAmount} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={layoutAmount} setValue={setLayoutAmount} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={printAmount} setValue={setPrintAmount} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={totalAmount} setValue={setTotalAmount} disabled={isPepsiCo}/></td>
        </tr>
        <tr>
          <td>Статус</td>
          <td><InputNoBorder value={packageStatus} setValue={setPackageStatus} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={constructiveStatus} setValue={setConstructiveStatus} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={layoutStatus} setValue={setLayoutStatus} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={printStatus} setValue={setPrintStatus} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={totalStatus} setValue={setTotalStatus} disabled={isPepsiCo}/></td>
        </tr>
        <tr>
          <td>Риски</td>
          <td><InputNoBorder value={packageRisk} setValue={setPackageRisk} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={constructiveRisk} setValue={setConstructiveRisk} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={layoutRisk} setValue={setLayoutRisk} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={printRisk} setValue={setPrintRisk} disabled={isPepsiCo}/></td>
          <td><InputNoBorder value={totalRisk} setValue={setTotalRisk} disabled={isPepsiCo}/></td>
        </tr>
        <tr>
          <td>Риски SFT</td>
          <td><PickColor value={packageRiskSFT} setValue={setPackageRiskSFT} disabled={isPepsiCo}/></td>
          <td><PickColor value={constructiveRiskSFT} setValue={setConstructiveRiskSFT} disabled={isPepsiCo}/></td>
          <td><PickColor value={layoutRiskSFT} setValue={setLayoutRiskSFT} disabled={isPepsiCo}/></td>
          <td><PickColor value={printRiskSFT} setValue={setPrintRiskSFT} disabled={isPepsiCo}/></td>
          <td><PickColor value={totalRiskSFT} setValue={setTotalRiskSFT} disabled={isPepsiCo}/></td>
        </tr>
        <tr>
          <td>Риски PEPSICO</td>
          <td><PickColor value={packageRiskPepsico} setValue={setPackageRiskPepsico} disabled={isPepsiCo}/></td>
          <td><PickColor value={constructiveRiskPepsico} setValue={setConstructiveRiskPepsico} disabled={isPepsiCo}/></td>
          <td><PickColor value={layoutRiskPepsico} setValue={setLayoutRiskPepsico} disabled={isPepsiCo}/></td>
          <td><PickColor value={printRiskPepsico} setValue={setPrintRiskPepsico} disabled={isPepsiCo}/></td>
          <td><PickColor value={totalRiskPepsico} setValue={setTotalRiskPepsico} disabled={isPepsiCo}/></td>
        </tr>
      </tbody>
    </table>
  )
}