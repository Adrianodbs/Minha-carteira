import * as C from './styles'

import { useMemo } from 'react'
import CountUp from 'react-countup'

import dolarImg from '../../assets/dolar.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'

interface IWalletBoxProps {
  title: string
  amount: number
  footerLabel: string
  icon: 'dolar' | 'arrowUp' | 'arrowDown'
  color: string
}

function WalletBox({
  amount,
  color,
  footerLabel,
  icon,
  title
}: IWalletBoxProps) {
  const iconSelected = useMemo(() => {
    if (icon === 'dolar') return dolarImg
    if (icon === 'arrowDown') return arrowDown
    if (icon === 'arrowUp') return arrowUp
  }, [])
  return (
    <C.Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={'R$ '}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected} alt={title} />
    </C.Container>
  )
}

export default WalletBox
