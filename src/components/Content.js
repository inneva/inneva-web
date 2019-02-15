import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import PropTypes from 'prop-types'

const Content = ({ markup }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: documentToHtmlString(markup)
    }}
  />
)

Content.propTypes = {
  markup: PropTypes.object.isRequired
}

export default Content