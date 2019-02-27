import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import BlockWrapper from '../../components/BlockWrapper'

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 580px) {
    margin-top: -4rem;
    height: 92%;
    flex-direction: column;
  }
    `,

  Canvas = styled.div`
  width: 32vw;
  height: 22vw;
  margin: 0 5vw;
  
  @media screen and (max-width: 580px) {
    width: 100vw;
    height: 65vw;
  }
  `,

  Img = styled.img`
  margin: 0 auto;
  display: block;
  width: 80%;
  border-radius: 50%;

  @media screen and (max-width: 580px) {
    width: 45vw;
    display: block;
    margin: 0 auto;
  }
  `,

  H = styled.h3`
  margin: 0 auto;
  padding: 2rem 0;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 3rem;
  font-weight: 400;

  @media screen and (max-width: 580px) {
    margin: 0 auto;
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
  Email = styled.a`
  color: white;
  font-weight: 300;
  line-height: 1.7rem;
  font-size: 1.7rem;
  text-align: center;
  display: block;
  text-decoration: none;

  @media screen and (max-width: 580px) {
    font-size: 1rem;
    width: 70vw;
    display: block;
    margin: 0 auto;
  }`,
  Info = styled.p`
  color: white;
  font-weight: 300;
  line-height: 1.6rem;
  font-size: 1.6rem;

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
              <Email href={`mailto:${e.email}`}>{e.email}</Email>
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
