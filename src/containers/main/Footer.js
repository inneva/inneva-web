import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/*
 * FIXME: All colors are temporary since I could not
 * extract them from the pdf with specified colors.
 */

const Footer = props => {

  const Foot = styled.div`
    width: 100vw;
    height: 20vh;
    background-color: ${props.bcolor}
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `,
   L = styled.div`
    width: 100px;
    height: 0;
    border: 2px solid #3d5a80;
    margin: 0 2rem;
    flex-grow: 1;
  `,

   LL = styled.div`
    width: 150px;
    height: 0;
    border: 2px solid #3d5a80;
    margin: 0 2rem;
    flex-grow: 5;
  `,

   Text = styled.a`
    color: white;
    text-align: center;
    font-size: 2rem;
    flex-grow: 1;
    text-decoration-color: #3d5a80;

    :hover {
      background-color: #3d5a80;
    }
  `

  return (
    <Foot>
        <L />
        <Text href="mailto:hello@inneva.se">hello@inneva.se</Text>
        <LL />
    </Foot>
  )
}

Footer.propTypes = {
  bcolor: PropTypes.string.isRequired
}

export default Footer