import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import BlockWrapper from '../../components/BlockWrapper'

import computer from './icons/computer.svg'
import user from './icons/user.svg'
import like from './icons/like.svg'

const Summary = ({ header, field1, field2, field3, setRef }) => {

  const Div = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,

   Text = styled.p`
    font-weight: 300;
    font-size: 1.7rem;
    line-height: 1.7rem;
  `,

   Box = styled.div`
    width: 15%;
  `,
   H = styled.h3`
    margin: 3rem auto;
    width: 100%;
    position: absolute;
    text-align: center;
    font-size: 3rem;
    font-weight: 400;
    `,
  Ribbon = styled.div`
    background-color: #ee6c4c;
    width: 6rem;
    height: 0.25rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.7rem;
  `

  return (
    <div ref={setRef}>
      <BlockWrapper bcolor="white">
        <H>{header}<Ribbon /></H>
        <Div>
          <Box>
            <img alt="Computer icon" src={computer} />
            <Text>{field1}</Text>
          </Box>
          <Box>
            <img alt="User icon" src={user} />
            <Text>{field2}</Text>
          </Box>
          <Box>
            <img alt="Like icon" src={like} />
            <Text>{field3}</Text>
          </Box>
        </Div>
      </BlockWrapper>
    </div>
  )
}

Summary.propTypes = {
  field1: PropTypes.string.isRequired,
  field2: PropTypes.string.isRequired,
  field3: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  setRef: PropTypes.object
}

export default Summary