import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import BlockWrapper from '../../components/BlockWrapper'

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
    `,

  Canvas = styled.div`
  width: 22vw;
  height: 22vw;
  margin: 0 5vw;
  
  @media screen and (max-width: 580px) {
    width: 100vw;
    height: 65vw;
  }
  `,

  Img = styled.img`
  width: 100%;
  border-radius: 50%;

  @media screen and (max-width: 580px) {
    width: 45vw;
    display: block;
    margin: 0 auto;
  }
  `,

  H = styled.h3`
  margin: 3rem auto;
  width: 100%;
  position: absolute;
  text-align: center;
  color: white;
  font-size: 3rem;
  font-weight: 400;

  @media screen and (max-width: 580px) {
    margin: 1rem auto;
    font-size: 2rem;
  }
  `,
  Ribbon = styled.div`
  background-color: #ee6c4c;
  width: 4rem;
  height: 0.25rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.4rem;
  `,

  Name = styled.h4`
  text-align: center;
  color: white;
  font-size: 2rem;
  margin: 1rem;
  font-weight: 400;

  @media screen and (max-width: 580px) {
    font-size: 1.5rem;
    margin: 0.5rem;  
  }
  `,
  Info = styled.p`
  color: white;
  font-weight: 300;
  line-height: 1.4rem;
  font-size: 1.4rem;

  @media screen and (max-width: 580px) {
    font-size: 1rem;
    text-align: center;
    width: 70vw;
    display: block;
    margin: 0 auto;
  }
  `

class People extends React.Component {
  render() {
    const { header, employees, setRef } = this.props

    return (
      <div ref={setRef}>
        <BlockWrapper
          bcolor="#3d5a80"
        >
          <H>{header}<Ribbon /></H>
          <Div>
            {employees.map((e, i) => <Canvas key={i}>
              <Img
                src={e.image.fields.file.url}
                alt={e.image.fields.description}
              />
              <Name>{e.name}</Name>
              <Info>{e.description}</Info>
            </Canvas>)}
          </Div>
        </BlockWrapper>
      </div>
    )
  }
}

People.propTypes = {
  employees: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  setRef: PropTypes.object
}

export default People