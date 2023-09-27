import React from 'react'
import styled from 'styled-components'
// import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'

const StyledSwapHeader = styled.div`
<<<<<<< HEAD
  padding: 12px 1rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
=======
  padding: 12px 1.5rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  // max-width: 420px;
>>>>>>> 67d3cd9 (changed theme for mobile)
  color: ${({ theme }) => theme.text2};
`

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <TYPE.swapHeader>
          <TYPE.white fontWeight={500} fontSize={'24px'} padding={'10px 0'} fontFamily="Chinese Rocks Rg">SWAP TOKENS</TYPE.white>
          <TYPE.gray fontWeight={400}>Trade tokens in an instant</TYPE.gray>
        </TYPE.swapHeader>
        {/* <Settings /> */}
<<<<<<< HEAD
        <img src="/images/logo.svg" width="60" alt="" />
=======
        <img src="/images/logo.svg" width="50" alt="" />
>>>>>>> 67d3cd9 (changed theme for mobile)
      </RowBetween>
    </StyledSwapHeader>
  )
}
