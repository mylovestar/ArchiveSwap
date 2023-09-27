// import {  TokenAmount } from '@uniswap/sdk'
import React, { useState } from 'react'
// import { Text } from 'rebass'
// import { NavLink } from 'react-router-dom'
// import { darken } from 'polished'
// import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

<<<<<<< HEAD
import Logo1 from '../../assets/svg/logo.svg'
=======
import Logo1 from '../../assets/svg/logo.png'
>>>>>>> 67d3cd9 (changed theme for mobile)
// import LogoDark from '../../assets/svg/logo_white.svg'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
// import { useETHBalances } from '../../state/wallet/hooks'
// import { CardNoise } from '../earn/styled'
// import { CountUp } from 'use-count-up'
// import { TYPE } from '../../theme'

// import { YellowCard } from '../Card'
import { Moon, Sun } from 'react-feather'
// import Menu from '../Menu'
// import SettingsTab from '../Settings'

import RowFixed from '../Row'
import Web3Status from '../Web3Status'
import ClaimModal from '../claim/ClaimModal'
// import { useToggleSelfClaimModal, useShowClaimPopup } from '../../state/application/hooks'
// import { useUserHasAvailableClaim } from '../../state/claim/hooks'
// import { useUserHasSubmittedClaim } from '../../state/transactions/hooks'
// import { Dots } from '../swap/styleds'
import Modal from '../Modal'
import UniBalanceContent from './UniBalanceContent'
// import usePrevious from '../../hooks/usePrevious'
// import { ExternalLink } from '../../theme'

const HeaderFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToMedium`
<<<<<<< HEAD
    grid-template-columns: 1fr;
=======
    // grid-template-columns: 1fr;
>>>>>>> 67d3cd9 (changed theme for mobile)
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.5rem 1rem;
  `}
`
// const MenuItem = styled(ExternalLink)`
//   flex: 1;
//   padding: 0.5rem 0.5rem;
//   border: 1px solid #fff;
//   border-radius: 12px;
//   color: ${({ theme }) => theme.text2};
//   :hover {
//     color: ${({ theme }) => theme.text1};
//     cursor: pointer;
//     text-decoration: none;
//   }
//   > svg {
//     margin-right: 8px;
//   }
// `
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
<<<<<<< HEAD

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
=======
  margin-right: 33.3%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: center;
    // justify-self: center;
    width: 100%;
    max-width: 960px;
    padding: 1rem;
    margin-right: 76px;
    // position: fixed;
>>>>>>> 67d3cd9 (changed theme for mobile)
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    border-radius: 12px 12px 0 0;
<<<<<<< HEAD
    background-color: ${({ theme }) => theme.bg1};
=======
    // background-color: ${({ theme }) => theme.bg1};
>>>>>>> 67d3cd9 (changed theme for mobile)
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
   flex-direction: row-reverse;
    align-items: center;
  `};
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

// const HeaderLinks = styled(Row)`
// border: 1px solid rgba(237, 9, 99, 0.7);
// border-radius: 10px;
// box-shadow: rgba(220, 81, 136, 0.9) 0px 0px 5px, rgba(220, 81, 136, 0.9) 0px 0px 7px;
// min-width: 0px;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-box-pack: start;
//     justify-content: flex-start;
// padding: 8px;
// display: grid;
// grid-auto-flow: column;
// gap: 10px;
// overflow: auto;
// // flex-wrap:wrap
// //   ${({ theme }) => theme.mediaWidth.upToMedium`
// //     padding: 1rem 0 1rem 1rem;
// //     justify-content: flex-end;
// // `};
// `
//autonio ui change
const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
<<<<<<< HEAD
=======
  justify-content: center;
>>>>>>> 67d3cd9 (changed theme for mobile)
  align-items: center;
  // background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  // border: 1px solid rgb(239 156 165);
  // box-shadow: rgb(234 190 194) 0px 0px 5px, rgb(234 201 203) 0px 0px 7px;
  // background: linear-gradient(90deg,#ff9f93 0%,#ffb9ad 35%,#ebcecb 100%);
  height: 45px;
  border-radius: 27px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  :focus {
    border: 1px solid blue;
  }
<<<<<<< HEAD
=======

  @media (max-width: 490px) {
    width: 150px;
    margin-right: -110px;
  }
>>>>>>> 67d3cd9 (changed theme for mobile)
`
//autonio change background color 27-02-2021
// const UNIAmount = styled(AccountElement)`
//   color: #d83c79;
//   padding: 8px 12px;
//   border-radius: 8px;
//   border: 1px solid rgb(239 156 165);
//   box-shadow: rgb(234 190 194) 0px 0px 5px, rgb(234 201 203) 0px 0px 7px;
//   background: linear-gradient(90deg,#ff9f93 0%,#ffb9ad 35%,#ebcecb 100%);
//   height: 45px;
//   font-weight: 500;
//   // background-color: ${({ theme }) => '#2F3641'};
//   //  background: linear-gradient(101.8deg, #6b3eeb 0%, rgb(127,89,125) 125%);
//   // background-color:'#D700FF'

// `

// const UNIWrapper = styled.span`
//   width: fit-content;
//   position: relative;
//   cursor: pointer;

//   :hover {
//     opacity: 0.8;
//   }

//   :active {
//     opacity: 0.9;
//   }
// `

// const HideSmall = styled.span`
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     display: none;
//   `};
// `

// const NetworkCard = styled(YellowCard)`
//   border-radius: 12px;
//   padding: 8px 12px;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     margin: 0;
//     margin-right: 0.5rem;
//     width: initial;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     flex-shrink: 1;
//   `};
// `

// const BalanceText = styled(Text)`
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     display: none;
//   `};
// `

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
<<<<<<< HEAD
  margin-right: 40px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
=======
  margin-left: 56px;
  margin-top: 17px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: flex;
    justify-content: center;
>>>>>>> 67d3cd9 (changed theme for mobile)
  `};
  :hover {
    cursor: pointer;
  }
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
<<<<<<< HEAD
  :hover {
    transform: rotate(-5deg);
  }
=======
  width: 140px;
  height: 135.28px;
  :hover {
    transform: rotate(-5deg);
  }

  @media (max-width: 490px) {
    width: 100px;
    height: 98px;
    margin-left: -50px;
  }
>>>>>>> 67d3cd9 (changed theme for mobile)
`

// const activeClassName = 'ACTIVE'

// const StyledNavLink = styled(NavLink).attrs({
//   activeClassName
// })`
//   ${({ theme }) => theme.flexRowNoWrap}
//   align-items: left;
//   border-radius: 3rem;
//   outline: none;
//   cursor: pointer;
//   text-decoration: none;
//   color: ${({ theme }) => theme.text2};
//   font-size: 22px;
//   width: fit-content;
//   margin: 0 0.3rem;
//   font-weight: 500;

//   &.${activeClassName} {
//     border-radius: 12px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text1};
//   }

//   :hover,
//   :focus {
//     color: ${({ theme }) => darken(0.1, theme.text1)};
//   }
// `

// const StyledExternalLink = styled(ExternalLink).attrs({
//   activeClassName
// }) <{ isActive?: boolean }>`
//   ${({ theme }) => theme.flexRowNoWrap}
//   align-items: left;
//   // display: none
//   border-radius: 3rem;
//   outline: none;
//   cursor: pointer;
//   text-decoration: none;
//   color: ${({ theme }) => theme.text2};
//   font-size: 1rem;
//   width: fit-content;
//   margin: 0 12px;
//   font-weight: 500;

//   &.${activeClassName} {
//     border-radius: 12px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text1};
//   }

//   :hover,
//   :focus {
//     color: ${({ theme }) => darken(0.1, theme.text1)};
//   }

//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//       display: none;
// `}
// `

export const StyledMenuButton = styled.button`
  position: relative;
  // width: 100%;
  // height: 100%;
  display: none;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 45px;
  background-color: ${({ theme }) => theme.bg3};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

// const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
//   [ChainId.RINKEBY]: 'Rinkeby',
//   [ChainId.ROPSTEN]: 'Ropsten',
//   [ChainId.MATIC]: 'Matic',
//   [ChainId.GÖRLI]: 'Görli',
//   [ChainId.KOVAN]: 'Kovan',
// }

export default function Header() {
  const { account } = useActiveWeb3React()
  // const { t } = useTranslation()

  // const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  // const [isDark] = useDarkModeManager()
  const [darkMode, toggleDarkMode] = useDarkModeManager()

  // const toggleClaimModal = useToggleSelfClaimModal()

  // const availableClaim: boolean = useUserHasAvailableClaim(account)

  // const { claimTxn } = useUserHasSubmittedClaim(account ?? undefined)

  // const aggregateBalance: TokenAmount | undefined = useAggregateUniBalance()

  const [showUniBalanceModal, setShowUniBalanceModal] = useState(false)
  // const showClaimPopup = useShowClaimPopup()

  // const countUpValue = aggregateBalance?.toFixed(3) ?? '0'
  // const countUpValuePrevious = usePrevious(countUpValue) ?? '0'

  return (
    <HeaderFrame>
      <ClaimModal />
      <Modal isOpen={showUniBalanceModal} onDismiss={() => setShowUniBalanceModal(false)}>
        <UniBalanceContent setShowUniBalanceModal={setShowUniBalanceModal} />
      </Modal>
      <HeaderRow>
        <Title href="." style={{ position: 'relative' }}>
          <UniIcon>
<<<<<<< HEAD
            <img width={110} height={106.291428} className="max-sm:w-[100px]" src={darkMode ? Logo1 : Logo1} alt="logo" />
=======
            <img width={"100%"} height={"100%"} className="max-sm:w-[100px]" src={darkMode ? Logo1 : Logo1} alt="logo" />
>>>>>>> 67d3cd9 (changed theme for mobile)
          </UniIcon>
        </Title>
        {/* <HeaderLinks>
          <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
            {t('swap')}
          </StyledNavLink>
          <StyledNavLink
            id={`pool-nav-link`}
            to={'comingsoon'}
            isActive={(match, { pathname }) =>
              Boolean(match) ||
              pathname.startsWith('/add') ||
              pathname.startsWith('/remove') ||
              pathname.startsWith('/create') ||
              pathname.startsWith('/find')
            }
          >
            {t('pool')}
          </StyledNavLink>
          <StyledNavLink id={`stake-nav-link`} to={'/comingsoon'}>
            Bridge
          </StyledNavLink>
          <StyledNavLink id={`stake-nav-link`} to={'/comingsoon'}>
            Farm
          </StyledNavLink>
          <StyledNavLink id={`stake-nav-link`} to={'/comingsoon'}>
            Stake
          </StyledNavLink>
        </HeaderLinks> */}
      </HeaderRow>
      <HeaderControls>
        <HeaderElement>
          {/* {availableClaim && !showClaimPopup && (
            <UNIWrapper onClick={toggleClaimModal}>
              <UNIAmount active={!!account && !availableClaim} style={{ pointerEvents: 'auto' }}>
                <TYPE.white padding="0 2px">
                  {claimTxn && !claimTxn?.receipt ? <Dots>Claiming TSU</Dots> : 'Claim UNI'}
                </TYPE.white>
              </UNIAmount>
              <CardNoise />
            </UNIWrapper>
          )}
          {!availableClaim && aggregateBalance && (
            <UNIWrapper onClick={() => setShowUniBalanceModal(true)}>
              <UNIAmount active={!!account && !availableClaim} style={{ pointerEvents: 'auto'}}>
                {account && (
                  <HideSmall>
                    <TYPE.white
                      style={{
                        paddingRight: '.4rem'

                      }}
                    >
                      <CountUp
                        key={countUpValue}
                        isCounting
                        start={parseFloat(countUpValuePrevious)}
                        end={parseFloat(countUpValue)}
                        thousandsSeparator={','}
                        duration={1}
                      />
                    </TYPE.white>
                  </HideSmall>
                )}
                TSU
              </UNIAmount>
              <CardNoise />
            </UNIWrapper>
          )} */}
          <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
            {/* {account && userEthBalance ? (
              <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                {userEthBalance?.toSignificant(4)} ETH
              </BalanceText>
            ) : null} */}
            <Web3Status />
          </AccountElement>
        </HeaderElement>
        <HeaderElementWrap>
          {/* <SettingsTab/> */}
          <StyledMenuButton onClick={() => toggleDarkMode()}>
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </StyledMenuButton>
          {/* <Menu /> */}
        </HeaderElementWrap>
      </HeaderControls>
    </HeaderFrame>
  )
}
