import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { RowBetween } from '../Row'
import { ChevronDown } from 'react-feather'
import { Button as RebassButton, ButtonProps } from 'rebass/styled-components'

const Base = styled(RebassButton) <{
  padding?: string
  width?: string
  borderRadius?: string
  altDisabledStyle?: boolean
}>`
  padding: ${({ padding }) => (padding ? padding : '18px')};
  width: ${({ width }) => (width ? width : '100%')};
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`

export const ButtonPrimary = styled(Base)`
  background-color: #FE201F;
<<<<<<< HEAD
  height: 30px;
=======
  height: 56px;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)
  color: white;
  border-radius: 27.5px;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:hover {
<<<<<<< HEAD
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
=======
    background-color: rgb(242 16 15);
>>>>>>> 67d3cd9 (changed theme for mobile)
  }
  &:active {
    // box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
  }
  &:disabled {
    background-color: ${({ theme, altDisabledStyle, disabled }) =>
    altDisabledStyle ? (disabled ? theme.bg3 : theme.primary1) : theme.bg3};
    color: ${({ theme, altDisabledStyle, disabled }) =>
    altDisabledStyle ? (disabled ? theme.text3 : 'white') : theme.text3};
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? '0.5' : '1')};
  }
`

export const ButtonLight = styled(Base)`
  // background-color: ${({ theme }) => theme.primary5};
  // color: ${({ theme }) => theme.primaryText1};
  border-radius: 27.5px;
  background-color: #FE201F;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
<<<<<<< HEAD
=======
  height: 56px;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)
  &:focus {
    // box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.03, theme.primary5)};
    // background-color: ${({ theme, disabled }) => !disabled && darken(0.03, theme.primary5)};
    background-color: #FE203F;
    border: 1px solid #FE201F;
    color:  #ffffff;
  }
  &:hover {
    // background-color: ${({ theme, disabled }) => !disabled && darken(0.03, theme.primary5)};
<<<<<<< HEAD
    background-color: #FE203F;
=======
    background-color: rgb(242 16 15);
>>>>>>> 67d3cd9 (changed theme for mobile)
  }
  &:active {
    // box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.05, theme.primary5)};
    background-color: #FE201F;
  }
  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
<<<<<<< HEAD
      background-color: #FE201F;
=======
      background-color: rgb(242 16 15);
>>>>>>> 67d3cd9 (changed theme for mobile)
      box-shadow: none;
      border: 1px solid transparent;
      outline: none;
    }
  }
`

export const ButtonGray = styled(Base)`
  background-color: #FE201F;
  color: ${({ theme }) => theme.text2};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    background-color: #FE201F;
  }
  &:hover {
<<<<<<< HEAD
    background-color: #FE201F;
=======
    background-color: rgb(242 16 15);
>>>>>>> 67d3cd9 (changed theme for mobile)
  }
  &:active {
    background-color: #FE201F;
  }
`

export const ButtonSecondary = styled(Base)`
  border: 1px solid #FE201F;
<<<<<<< HEAD
  color: ${({ theme }) => theme.primary1};
  background-color: transparent;
  font-size: 16px;
=======
  color: white;
  background-color: transparent;
  font-size: 16px;
  height: 56px;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)
  // border-radius: 12px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:focus {
    // box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
    border: 1px solid #FE201F;
  }
  &:hover {
    // border: 1px solid #FE201F;
    background-color: rgba(254, 32, 31, 0.3) !important;
  }
  &:active {
    // box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
    border: 1px solid #FE201F;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`

export const ButtonPink = styled(Base)`
  background-color: ${({ theme }) => theme.primary1};
  color: white;

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:hover {
<<<<<<< HEAD
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
=======
    background-color: rgb(242 16 15);
>>>>>>> 67d3cd9 (changed theme for mobile)
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.primary1};
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonUNIGradient = styled(ButtonPrimary)`
  color: white;
  padding: 4px 8px;
<<<<<<< HEAD
  height: 36px;
  font-weight: 500;
=======
  height: 56px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)
  background-color: ${({ theme }) => theme.bg3};
  width: fit-content;
  position: relative;
  cursor: pointer;
  border: none;
  white-space: no-wrap;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.9;
  }
`

export const ButtonOutlined = styled(Base)`
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: transparent;
<<<<<<< HEAD
  color: ${({ theme }) => theme.text1};
=======
  color: white;
  height: 56px;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:active {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonEmpty = styled(Base)`
  background-color: transparent;
<<<<<<< HEAD
  color: ${({ theme }) => theme.primary1};
  display: flex;
  justify-content: center;
  align-items: center;
=======
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)

  &:focus {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonWhite = styled(Base)`
  border: 1px solid #edeef2;
  background-color: ${({ theme }) => theme.bg1};
  color: black;
<<<<<<< HEAD
=======
  height: 56px;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt ${darken(0.05, '#edeef2')};
  }
  &:hover {
    box-shadow: 0 0 0 1pt ${darken(0.1, '#edeef2')};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${darken(0.1, '#edeef2')};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const ButtonConfirmedStyle = styled(Base)`
  background-color: #FE206F;
  color: ${({ theme }) => theme.green1};
  border: 1px solid #FE206F;
<<<<<<< HEAD
=======
  height: 56px;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const ButtonErrorStyle = styled(Base)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};
<<<<<<< HEAD
  height: 30px;
=======
  height: 56px;
  font-family: Poppins, sans-serif;
>>>>>>> 67d3cd9 (changed theme for mobile)

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.red1)};
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:hover {
<<<<<<< HEAD
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
=======
    background-color: rgb(242 16 15);
>>>>>>> 67d3cd9 (changed theme for mobile)
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.red1)};
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.red1};
    border: 1px solid ${({ theme }) => theme.red1};
  }
`

export function ButtonConfirmed({
  confirmed,
  altDisabledStyle,
  ...rest
}: { confirmed?: boolean; altDisabledStyle?: boolean } & ButtonProps) {
  if (confirmed) {
    return <ButtonConfirmedStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} altDisabledStyle={altDisabledStyle} />
  }
}

export function ButtonError({ error, ...rest }: { error?: boolean } & ButtonProps) {
  if (error) {
    return <ButtonErrorStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}

export function ButtonDropdown({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonPrimary {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonPrimary>
  )
}

export function ButtonDropdownGrey({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonGray {...rest} disabled={disabled} style={{ borderRadius: '20px' }}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonGray>
  )
}

export function ButtonDropdownLight({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonOutlined {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonOutlined>
  )
}

export function ButtonRadio({ active, ...rest }: { active?: boolean } & ButtonProps) {
  if (!active) {
    return <ButtonWhite {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}
