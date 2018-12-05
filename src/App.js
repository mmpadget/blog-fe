import React from 'react'
import { connect } from 'react-redux'
import './App.css';
import './index.js'

const mapStateToProps = state => ({
  appName: state.appName
})

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.appName}
      </div>
    )
  }
}

export default connect(mapStateToProps, () => ({}))(App)
