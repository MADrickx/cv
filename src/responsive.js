import { css } from 'styled-components'

export const bigScreen = (props) => css`
  @media only screen and (min-width: 1920px) {
    ${props}
  }
`

export const mobile = (props) => css`
  @media only screen and (max-width: 730px) {
    ${props}
  }
`

export const tablet = (props) => css`
  @media only screen and (max-width: 1440px) {
    ${props}
  }
`

export const adjust = (props) => css`
  @media only screen and (min-width: 1600px) {
    ${props}
  }
`
