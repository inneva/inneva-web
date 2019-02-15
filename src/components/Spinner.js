import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spinner = () => {
  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `,
  Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
  `,
  StyledSpinner = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #f3f3f3;
    border-top: 5px solid black;
    margin: auto;
    animation: ${rotate} 1.5s ease infinite;
  `

  return (
    <Wrapper>
      <StyledSpinner />
    </Wrapper>
  )
}

export default Spinner