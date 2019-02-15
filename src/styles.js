import { css } from 'styled-components'

// colors
export const PRIMARY_COLOR = '#DB4829'
export const LIGHT_BLUE = '#4B6B90'
export const BLACK = 'black'
export const WHITE = 'WHITE'

// etc
export const DEFAULT_PADDING = 15
export const DEFAULT_MARGIN = 15

// styled-components template

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
  }

export const mediaTemplates = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})