import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import ApiClient from '../api/client'
import Button from '../components/Button'
import Content from '../components/Content'
import Date from '../components/Date'
import Spinner from '../components/Spinner'

import * as STYLES from '../styles'

const Main = styled.div`
  font-size: 1.3em;
  margin: auto;
`

const HeaderWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
`

const HeaderImage = styled.img`
  width: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  margin: auto;
  ${STYLES.mediaTemplates.tablet`max-width: 75%;`}
  ${STYLES.mediaTemplates.desktop`max-width: 40%;`}
  margin-bottom: 50px;
  padding: 0 25px;
  ${STYLES.mediaTemplates.desktop`padding: 0;`}
  font-size: 1.5rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: lighter;
  margin-top: ${STYLES.DEFAULT_MARGIN};
  text-transform: uppercase;
  text-align: center;
`

class Case extends Component {
  constructor(props) {
    super(props)

    this.state = {
      caseLoading: true,
      client: new ApiClient(),
      data: null,
      imgLoading: true
    }
  }

  componentDidMount() {
    this.state.client.getCaseBySlug(this.props.match.params.slug)
      .then(data => {
        this.setState({ caseLoading: false, data })
      })
      .catch(err => {
        console.error(err)
        this.setState({ caseLoading: false })
      })
  }

  render() {
    const { caseLoading, data, imgLoading } = this.state

    if (caseLoading) return <Spinner />

    return (
      <Main style={{ opacity: imgLoading ? 0 : 1 }}>
        <HeaderWrapper>
          <HeaderImage
            alt={data.header.fields.title || 'Case header'}
            src={data.header.fields.file.url}
            onLoad={() => this.setState(prevState => ({ ...prevState, imgLoading: false }))}
          />
        </HeaderWrapper>

        <Title>{data.title}</Title>
        <ContentWrapper>
          <Date date={data.date} />
          <Content markup={data.content} />
          <Button
            text="&larr; Tillbaka"
            styles={{ marginTop: STYLES.DEFAULT_MARGIN }}
            onClick={() => this.props.history.push('/')}
          />
        </ContentWrapper>
      </Main>
    )
  }
}

Case.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withRouter(Case)