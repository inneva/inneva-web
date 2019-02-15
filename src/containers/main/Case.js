import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import BlockWrapper from '../../components/BlockWrapper'

const Case = ({ index, data, history }) => {

  const Half = styled.div`
    overflow: hidden;
    height: 100%;
    width: 50%;
    position: relative;
  `,

   Img = styled.img`
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    position: relative;
    left: 50%;
    top: 50%;  
    transition-duration: 0.3s;

    :hover {
      cursor: pointer;
      transform: translate(-50%, -50%) scale(1.04);
    }
  `,

   Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

   CaseText = styled.h3`
    font-size: 3rem;
    font-weight: 400;
    margin-top: 8%;
    margin-left: 15%;
    width: 0;

    :hover {
      cursor: pointer;

      * {
        height: 2.3rem;
        margin-top: -2.9rem;
      }
    }
  `,

   Ribbon = styled.div`
    background-color: #ee6c4cb5;
    width: 7rem;
    height: 0.6rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1.2rem;
  `,

   Title = styled.h3`
    font-size: 4rem;
    font-weight: 400;
    margin-top: unset;
    margin-left: 15%;
    margin-bottom: 1rem;
  `,

   Slug = styled.p`
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: unset;
    margin-left: 15%;
    margin-right: 15%;
  `,

   ReadMore = styled(Link)`
    position: absolute;
    margin-left: 15%;
    font-size: 1.4rem;
    bottom: 2rem;
    color: #3c5981;
    font-weight: 700;

    :hover {
      cursor: pointer;
    }
  `

  if (index % 2 === 0) {
    return (
      <BlockWrapper height="65vh">
        <Div>
          <Half>
              <Img
                alt={data.header.fields.description}
                src={data.header.fields.file.url}
                onClick={() => history.push(`/case/${data.slug}`)}
              />
            </Half>
          <Half>
            <CaseText>Case<Ribbon /></CaseText>
            <Title>{data.title}</Title>
            <Slug>{data.excerpt}</Slug>
            <ReadMore to={`/case/${data.slug}`}>Läs mer</ReadMore>
          </Half>
        </Div>
      </BlockWrapper>
    )
  }

  return (
    <BlockWrapper height="65vh">
      <Div>
        <Half>
          <CaseText style={{ marginLeft: '65%' }}>Case<Ribbon /></CaseText>
          <Title style={{ marginRight: '15%', textAlign: 'right' }}>{data.title}</Title>
          <Slug style={{ marginRight: '15%', textAlign: 'right' }}>{data.excerpt}</Slug>
          <ReadMore
            to={`/case/${data.slug}`}
            style={{ marginRight: '15%', right: '0' }}>Läs mer</ReadMore>
        </Half>
        <Half>
          <Img
            alt={data.header.fields.description}
            src={data.header.fields.file.url}
            onClick={() => history.push(`/case/${data.slug}`)}
          />
        </Half>
      </Div>
    </BlockWrapper>
  )
}

Case.propTypes = {
  bcolor: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  history: PropTypes.any,
  index: PropTypes.number.isRequired
}

export default withRouter(Case)