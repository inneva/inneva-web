import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BlockWrapper = ({ height, bcolor, children }) => {

  const Block = styled.div`
  width: 100vw;
  height: ${height || '80vh'};
  background-color: ${bcolor};

  @media screen and (max-width: 580px) {
    height: ${height || '120vh'};
  }
  `

  return (
    <Block>
      {children}
    </Block>
  )
}

BlockWrapper.propTypes = {
  bcolor: PropTypes.string,
  children: PropTypes.any,
  height: PropTypes.string
}

export default BlockWrapper