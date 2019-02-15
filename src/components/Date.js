import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as styles from '../styles'

const Date = ({ date }) => {
  const Wrapper = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
  `,
  Year = styled.span`
    color: ${styles.BLACK}
  `,
  Month = styled.span`
    color: ${styles.PRIMARY_COLOR}
  `

  const parts = date.split('-')
  const [year, month] = parts
  console.log(year, month)

  return (
    <Wrapper>
      <Year>{year}</Year>
      <Month>{month}</Month>
    </Wrapper>
  )
}

Date.propTypes = {
  date: PropTypes.string.isRequired
}

export default Date