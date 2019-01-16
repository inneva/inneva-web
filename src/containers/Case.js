import React, { Component } from 'react'

import { getCaseBySlug } from '../client'

class Case extends Component {
  state = {
    isLoading: true,
    data: {}
  }

  componentDidMount() {
    getCaseBySlug(this.props.match.params.slug)
      .then(data => {
        this.setState({ isLoading: false, data })
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

export default Case