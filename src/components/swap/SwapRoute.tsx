import { Trade } from '@uniswap/sdk'
import React, { Fragment, memo } from 'react'
import { ChevronRight } from 'react-feather'
import { Flex } from 'rebass'
// import { ThemeContext } from 'styled-components'
import { TYPE } from '../../theme'
import { unwrappedToken } from 'utils/wrappedCurrency'

export default memo(function SwapRoute({ trade }: { trade: Trade }) {
  // const theme = useContext(ThemeContext)
  return (
    <Flex flexWrap="wrap" width="100%" justifyContent="flex-end" alignItems="center">
      {trade.route.path.map((token, i, path) => {
        const isLastItem: boolean = i === path.length - 1
        const currency = unwrappedToken(token)
        return (
          <Fragment key={i}>
            <Flex alignItems="end">
<<<<<<< HEAD
              <TYPE.black fontSize={14} color={'gray'} ml="0.125rem" mr="0.125rem">
                {currency.symbol === 'ETH' ? 'ETH' : currency.symbol}
              </TYPE.black>
            </Flex>
            {isLastItem ? null : <ChevronRight size={12} color={'gray'} />}
=======
              <TYPE.black fontSize={14} color={'white'} ml="0.125rem" mr="0.125rem">
                {currency.symbol === 'ETH' ? 'ETH' : currency.symbol}
              </TYPE.black>
            </Flex>
            {isLastItem ? null : <ChevronRight size={12} color={'white'} />}
>>>>>>> 67d3cd9 (changed theme for mobile)
          </Fragment>
        )
      })}
    </Flex>
  )
})
