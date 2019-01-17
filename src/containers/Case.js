import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getCaseBySlug } from '../client'

class Case extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      isLoading: true
    }
  }

  componentDidMount() {
    getCaseBySlug(this.props.match.params.slug)
      .then(data => {
        this.setState({ data, isLoading: false })
      })
      .catch(err => {
        console.error(err)
        this.setState({ isLoading: false })
      })
  }

  render() {
    const { isLoading, data } = this.state

    if (isLoading) return null
    if (!data) return <h1>Not found</h1>

    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.excerpt}</p>
      </div>
    )
  }
}

Case.propTypes = {
  match: PropTypes.object.isRequired
}

export default Case