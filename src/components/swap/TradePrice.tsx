import React from 'react'
import { Price } from '@uniswap/sdk'
// import { useContext } from 'react'
<<<<<<< HEAD
import { Repeat } from 'react-feather'
import { Text } from 'rebass'
// import { ThemeContext } from 'styled-components'
import { StyledBalanceMaxMini } from './styleds'
=======
// import { Repeat } from 'react-feather'
import { Text } from 'rebass'
// import { ThemeContext } from 'styled-components'
// import { StyledBalanceMaxMini } from './styleds'
>>>>>>> 67d3cd9 (changed theme for mobile)

interface TradePriceProps {
  price?: Price
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePrice({ price, showInverted, setShowInverted }: TradePriceProps) {
  // const theme = useContext(ThemeContext)

  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? `${price?.quoteCurrency?.symbol === 'ETH' ? 'ETH' : price?.quoteCurrency?.symbol} per ${price?.baseCurrency?.symbol === 'ETH' ? 'ETH' : price?.baseCurrency?.symbol}`
    : `${price?.baseCurrency?.symbol === 'ETH' ? 'ETH' : price?.baseCurrency?.symbol} per ${price?.quoteCurrency?.symbol === 'ETH' ? 'ETH' : price?.quoteCurrency?.symbol}`

  return (
    <Text
      fontWeight={500}
      fontSize={14}
      color={'white'}
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      {show ? (
        <>
          {formattedPrice ?? '-'} {label}
<<<<<<< HEAD
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <Repeat size={14} />
          </StyledBalanceMaxMini>
=======
          {/* <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <Repeat size={14} />
          </StyledBalanceMaxMini> */}
>>>>>>> 67d3cd9 (changed theme for mobile)
        </>
      ) : (
          '-'
        )}
    </Text>
  )
}
