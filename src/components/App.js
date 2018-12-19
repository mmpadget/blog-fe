import React from 'react'
import { connect } from 'react-redux'
// import { withRouter, Route, Switch } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import agent from '../agent'
import Home from './Home'
import Header from './Header'
import Login from './Login'

const mapStateToProps = state => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
})

const mapDispatchToProps = dispatch => ({
  // Dispatch app load event that we added into the common reducer.
  onLoad: (payload, token) =>
    dispatch({ type: 'APP_LOAD', payload, token }),
  onRedirect: () =>
    dispatch({ type: 'REDIRECT'})
})

class App extends React.Component {
  // Check local storage for a token.
  componentWillMount() {
    // Get token from local storage.
    const token = window.localStorage.getItem('jwt')
    // If the token exists, set it.
    if (token) {
      agent.setToken(token)
    }

    // Call onLoad function. If the token is set, get the current user. Otherwise, don't pass in any payload. Then pass along token.
    this.props.onLoad(token ? agent.Auth.current() : null, token)
  }

  // Execute a function every time the app component's props change.
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // Set current URL to the redirect.
      this.context.router.replace(nextProps.redirectTo)
      // Dispatch the redirect action. Redirect user back to home page after they have successfully logged in.
      this.props.onRedirect()
    }
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.props.currentUser}
          appName={this.props.appName} />
        {this.props.children}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>

      </div>
    )
  }
}
// export default connect(mapStateToProps, () => ({}) )(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
