import React from 'react'
import { connect } from 'react-redux'

import Header from '../Header'
import Login from '../Login'
import Banner from './Banner'
import MainView from './MainView'
import agent from '../../agent'

// const Promise = global.Promise

class Home extends React.Component {
  // This function is invoked immediately before the component is rendered, which is used for the HTTP articles request.
  componentWillMount() {
    // A component can call this.props.onLoad() to fire off an event with type 'HOME_PAGE_LOADED' and a 'payload', which is the Promise from our request.
    this.props.onLoad(agent.Articles.all())
  }

  render() {
    return (
      <div className="home-page">

        <Header appName={this.props.appName} />
        <Login />
        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  appName: state.appName
})

// // Maps the Redux store's dispatch function to actions.
// const mapDispatchToProps = dispatch => ({
//   // Each function that mapDispatchToProps() returns gets attached to the component's props.
//   onLoad: (payload) =>
//     // Dispatching an action that has a 'payload' property that contains a promise.
//     dispatch({ type: 'HOME_PAGE_LOADED', payload})
// })

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: 'HOME_PAGE_LOADED', payload})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
