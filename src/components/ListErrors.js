// import React, { Component } from 'react'
import React from 'react'

// class ListErrors extends React {
class ListErrors extends React.Component {
  render() {
    // const errors = this.props.errors
    const { errors } = this.props
    if (errors) {
      return (
        <ul className="error-messages">
          {
            Object.keys(errors).map(key => {
              return (
                <li key={key}>
                  {key} {errors[key]}
                </li>
              )
            })
          }
        </ul>
      )
    } else {
      return null
    }
  }
}

export default ListErrors
