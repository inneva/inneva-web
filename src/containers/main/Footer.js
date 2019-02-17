import React from 'react'
import styled from 'styled-components'

const FOOTER_BG = 'rgba(0, 0, 0, 0.83)'
const FOOTER_BLUE = '#4B6B90'

const Footer = () => {

  const Foot = styled.div`
    width: 100vw;
    height: 20vh;
    background-color: ${FOOTER_BG};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `,
   L = styled.div`
    width: 100px;
    height: 0;
    border: 2px solid ${FOOTER_BLUE};
    margin: 0 2rem;
    flex-grow: 1;
  `,

   LL = styled.div`
    width: 150px;
    height: 0;
    border: 2px solid ${FOOTER_BLUE};
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

    @media screen and (max-width: 580px) {
      font-size: 1.2rem;
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

export default Footer