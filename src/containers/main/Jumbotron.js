import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import BlockWrapper from '../../components/BlockWrapper'
import logo from './icons/complete_logo_white.png'

const Jumbotron = ({ tagline }) => {

  const Div = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,

   Img = styled.img`
    width: 55%;
  `,

   appear = keyframes`
    0% {
      opacity: 0;
      transform: translateY(1.5rem);
    }

    50% {
      opacity: 0;
      transform: translateY(1.5rem);
    }

    75% {
      opacity: 0.9;
    }

    100% {
      opacity: 1;
    }
  `,

   unfold = keyframes`
    0% {
      width: 0;
    }

    70% {
      width: 0;
    }

    100% {
      width: 40%;
    }
  `,

   Slogan = styled.div`
    color: white;
    font-size: 1.6rem;
    margin-top: 1.6rem;
    font-weight: 300;
    overflow: hidden;
    text-align: center;
    animation: ${appear} 1.2s ease-out;
  `,

   Ribbon = styled.div`
    background-color: #ee6c4c;
    width: 40%;
    height: 0.3rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.7rem;
    animation: ${unfold} 1.8s ease-out;
  `

  return (
    <BlockWrapper height="95vh" bcolor="black">
      <Div>
        <Img src={logo}></Img>
        <Slogan>{tagline || ''}<Ribbon /></Slogan>
      </Div>
    </BlockWrapper>
  )
}

Jumbotron.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Jumbotron