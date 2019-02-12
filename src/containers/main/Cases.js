import React from 'react'
import PropTypes from 'prop-types'
import Case from './Case'

const Cases = ({ cases, setRef }) => (
  <div ref={setRef}>
    {cases.map((c, i) => (
      <Case
        key={i}
        index={i}
        bcolor="white"
        data={c}
      />
    ))}
  </div>
)

Cases.propTypes = {
  cases: PropTypes.array.isRequired,
  setRef: PropTypes.object
}

export default Cases