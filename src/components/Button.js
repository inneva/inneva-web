import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as STYLES from '../styles'

const StyledButton = styled.button`
  background: ${STYLES.WHITE};
  border: 2px solid ${STYLES.LIGHT_BLUE};
  color: ${STYLES.LIGHT_BLUE}
  padding: 15px 25px;
  font-size: 1.3em;
  cursor: pointer;

  -webkit-transition: all 0.3s; /* Safari */
  transition: all 0.3s;

  &:hover {
    background: ${STYLES.LIGHT_BLUE};
    color: ${STYLES.WHITE}
  }
`

const Button = ({ text, onClick, styles = {} }) => (
  <StyledButton
    style={styles}
    onClick={onClick}
  >{text}</StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.object,
  text: PropTypes.string.isRequired
}

export default Button