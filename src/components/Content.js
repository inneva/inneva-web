import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import PropTypes from 'prop-types'

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { title, file } = node.data.target.fields
      return `<img style="max-width: 100%; margin: 25px 0;" src=${file.url} alt=${title} />`
    }
  }
}

const Content = ({ markup }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: documentToHtmlString(markup, options)
    }}
  />
)

Content.propTypes = {
  markup: PropTypes.object.isRequired
}

export default Content