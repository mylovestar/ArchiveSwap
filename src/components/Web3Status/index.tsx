// import { AbstractConnector } from '@web3-react/abstract-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { darken, lighten } from 'polished'
import React, { useMemo } from 'react'
import { Activity } from 'react-feather'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
// import CoinbaseWalletIcon from '../../assets/images/coinbaseWalletIcon.svg'
// import FortmaticIcon from '../../assets/images/fortmaticIcon.png'
// import PortisIcon from '../../assets/images/portisIcon.png'
// import WalletConnectIcon from '../../assets/images/walletConnectIcon.svg'
// import { fortmatic, injected, portis, walletconnect, walletlink } from '../../connectors'
import { NetworkContextName } from '../../constants'
import useENSName from '../../hooks/useENSName'
import { useHasSocks } from '../../hooks/useSocksBalance'
import { useWalletModalToggle } from '../../state/application/hooks'
import { isTransactionRecent, useAllTransactions } from '../../state/transactions/hooks'
import { TransactionDetails } from '../../state/transactions/reducer'
import { shortenAddress } from '../../utils'
import { ButtonSecondary } from '../Button'

// import Identicon from '../Identicon'
import Loader from '../Loader'

import { RowBetween } from '../Row'
import WalletModal from '../WalletModal'

// const IconWrapper = styled.div<{ size?: number }>`
//   ${({ theme }) => theme.flexColumnNoWrap};
//   align-items: center;
//   justify-content: center;
//   & > * {
//     height: ${({ size }) => (size ? size + 'px' : '32px')};
//     width: ${({ size }) => (size ? size + 'px' : '32px')};
//   }
// `

const Web3StatusGeneric = styled(ButtonSecondary)`
  ${({ theme }) => theme.flexRowNoWrap}
<<<<<<< HEAD
  width: 100%;
  align-items: center;
  padding: 0.5rem;
  // border-radius: 8px;
  border: 1px solid #FE201F;
  // box-shadow: rgb(234 190 194) 0px 0px 5px, rgb(234 201 203) 0px 0px 7px;
  background: rgba(254, 32, 31, 0.09) !important;
  height: 45px;
=======
  width: 209.5px;
  align-items: center;
  padding: 16px 24px;
  border-radius: 27px;
  border: 1px solid #FE201F;
  // box-shadow: rgb(234 190 194) 0px 0px 5px, rgb(234 201 203) 0px 0px 7px;
  background: rgba(254, 32, 31, 0.09) !important;
  height: 55.5px;
>>>>>>> 67d3cd9 (changed theme for mobile)
  cursor: pointer;
  user-select: none;
  opacity: 0.7;
  :focus {
    outline: none;
  }
`
const Web3StatusError = styled(Web3StatusGeneric)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid #FE201F;
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  :hover,
  :focus {
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
`

const Web3StatusConnect = styled(Web3StatusGeneric) <{ faded?: boolean }>`
  background-color: ${({ theme }) => theme.primary4};
  border: none;
  color: ${({ theme }) => theme.primaryText1};
  font-weight: 500;

  :hover,
  :focus {
    border: 1px solid #FE201F;
    color: ${({ theme }) => theme.primaryText1};
  }

  ${({ faded }) =>
    faded &&
    css`
      background-color: ${({ theme }) => theme.primary5};
      border: 1px solid #FE201F;
      color: ${({ theme }) => theme.primaryText1};

      :hover,
      :focus {
        border: 1px solid #FE201F;
        color: ${({ theme }) => darken(0.05, theme.primaryText1)};
      }
    `}
`

const Web3StatusConnected = styled(Web3StatusGeneric) <{ pending?: boolean }>`
  background-color: ${({ pending, theme }) => (pending ? theme.primary1 : theme.green1)};
 border: 1px solid ${({ pending, theme }) => (pending ? theme.primary1 : theme.bg3)}; 2021-12-11
  color: ${({ pending, theme }) => (pending ? theme.white : theme.text1)};
  font-weight: 500;
  :hover,
  :focus {
    background-color: ${({ pending, theme }) => (pending ? darken(0.05, theme.primary1) : lighten(0.05, theme.bg2))};

    :focus {
      border: 1px solid #FE201F;
    }
  }
`

const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
<<<<<<< HEAD
  margin: 0 0.5rem 0 0.25rem;
  font-size: 14px;
  font-family: Poppins, sans-serif;
  width: fit-content;
  font-weight: 700;
=======
  // margin: 0 0.25rem 0 0.25rem;
  font-size: 14px;
  font-family: Poppins, sans-serif;
  width: fit-content;
  font-weight: 400;
>>>>>>> 67d3cd9 (changed theme for mobile)
  color: rgb(254 32 31);
  text-transform: uppercase;
  font-style: normal;
`

const NetworkIcon = styled(Activity)`
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`

// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a: TransactionDetails, b: TransactionDetails) {
  return b.addedTime - a.addedTime
}

const SOCK = (
  <span role="img" aria-label="has socks emoji" style={{ marginTop: -4, marginBottom: -4 }}>
    🧦
  </span>
)

// eslint-disable-next-line react/prop-types
// function StatusIcon({ connector }: { connector: AbstractConnector }) {
//   if (connector === injected) {
//     return <Identicon />
//   } else if (connector === walletconnect) {
//     return (
//       <IconWrapper size={16}>
//         <img src={WalletConnectIcon} alt={''} />
//       </IconWrapper>
//     )
//   } else if (connector === walletlink) {
//     return (
//       <IconWrapper size={16}>
//         <img src={CoinbaseWalletIcon} alt={''} />
//       </IconWrapper>
//     )
//   } else if (connector === fortmatic) {
//     return (
//       <IconWrapper size={16}>
//         <img src={FortmaticIcon} alt={''} />
//       </IconWrapper>
//     )
//   } else if (connector === portis) {
//     return (
//       <IconWrapper size={16}>
//         <img src={PortisIcon} alt={''} />
//       </IconWrapper>
//     )
//   }
//   return null
// }
//#540581
function Web3StatusInner() {
  const { t } = useTranslation()
  const { account, error } = useWeb3React()
  const { ethereum } = window;
  const { ENSName } = useENSName(account ?? undefined)

  const allTransactions = useAllTransactions()

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash)

  const hasPendingTransactions = !!pending.length
  const hasSocks = useHasSocks()
  const toggleWalletModal = useWalletModalToggle()

  const addMaticToMetamask = () => {
    if (ethereum) {
      // @ts-ignore
      ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          "chainId": "0x1",
          "chainName": "Ethereum",
          "rpcUrls": ["https://eth.llamarpc.com"],
          "iconUrls": [
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png"
          ],
          "blockExplorerUrls": [
            "https://etherscan.io/"
          ],
          "nativeCurrency": {
            "name": "Wrapped Ether",
            "symbol": "ETH",
            "decimals": 18
          }
        }], // you must have access to the specified account
      })
        .then((result: any) => {
        })
        .catch((error: any) => {
          if (error.code === 4001) {
            // EIP-1193 userRejectedRequest error
         //   console.log('We can encrypt anything without the key.');
          } else {
            console.error(error);
          }
        });
    }

  }

  if (account) {
    return (
      <Web3StatusConnected id="web3-status-connected" onClick={toggleWalletModal} pending={hasPendingTransactions}>
        {hasPendingTransactions ? (
          <RowBetween>
            <Text>{pending?.length} Pending</Text> <Loader stroke="white" />
          </RowBetween>
        ) : (
            <>
              {hasSocks ? SOCK : null}
              <Text>{ENSName || shortenAddress(account)}</Text>
            </>
          )}
        {/* {!hasPendingTransactions && connector && <StatusIcon connector={connector} />} */}
      </Web3StatusConnected>
    )
  } else if (error) {
    return (
      <div>

        {
          error instanceof UnsupportedChainIdError && !(ethereum && ethereum.isMetaMask) &&
          <Web3StatusError onClick={toggleWalletModal}>
            <NetworkIcon />
            <Text>Wrong Network</Text>
          </Web3StatusError>
        }
        {
          error instanceof UnsupportedChainIdError && (ethereum && ethereum.isMetaMask) && <Web3StatusConnect id="connect-wallet" onClick={addMaticToMetamask} faded={!account}>
<<<<<<< HEAD
            <img src="/images/walleticon.svg" width="20" alt="" />
=======
            <img src="/images/walleticon.svg" width="21.5" height="17.5" alt="" />
>>>>>>> 67d3cd9 (changed theme for mobile)
            <Text>{t('Switch to Ethereum')}</Text>
          </Web3StatusConnect>
        }
      </div>
    )
  } else {
    return (
      // <Web3StatusConnect id="connect-wallet"  onClick={(ethereum && ethereum.isMetaMask) ? addMaticToMetamask : toggleWalletModal} faded={!account}>
      <Web3StatusConnect id="connect-wallet"  onClick={toggleWalletModal} faded={!account}>
<<<<<<< HEAD
        <img src="/images/walleticon.svg" width="20" alt="" />
=======
        <img src="/images/walleticon.svg" width="21.5" height="17.5" alt="" />
>>>>>>> 67d3cd9 (changed theme for mobile)
        <Text>{(ethereum && ethereum.isMetaMask) ? t('Connect wallet') : t('Connect wallet')}</Text>
      </Web3StatusConnect>
    )
  }
}

export default function Web3Status() {
  const { active, account } = useWeb3React()
  const contextNetwork = useWeb3React(NetworkContextName)

  const { ENSName } = useENSName(account ?? undefined)

  const allTransactions = useAllTransactions()

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash)
  const confirmed = sortedRecentTransactions.filter(tx => tx.receipt).map(tx => tx.hash)

  if (!contextNetwork.active && !active) {
    return null
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal ENSName={ENSName ?? undefined} pendingTransactions={pending} confirmedTransactions={confirmed} />
    </>
  )
}
