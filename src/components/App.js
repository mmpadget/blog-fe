import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
// import Home from './Home'

const mapStateToProps = state => ({
  appName: state.appName
})

// Home component is represented by the props.children property.
class App extends Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    )
  }
}

// Tells react-router to attach the children property to this component's props.
App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, () => ({}))(App)
