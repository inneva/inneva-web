import React, { Component } from 'react'

class Case extends Component {
  render() {
    return (
      <h1>Case with slug {this.props.match.params.slug} should be rendered here</h1>
    )
  }
}

export default Case