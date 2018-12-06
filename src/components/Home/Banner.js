import React from 'react'

// https://reactjs.org/docs/legacy-context.html#referencing-context-in-stateless-function-components
// https://reactjs.org/docs/context.html
const Banner = ({ appName }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  )
}

export default Banner
