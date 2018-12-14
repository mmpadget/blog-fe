import React from 'react'
import { connect } from 'react-redux'

import Banner from './Banner'
import MainView from './MainView'
import agent from '../../agent'

const mapStateToProps = state => ({
  appName: state.common.appName
})

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: 'HOME_PAGE_LOADED', payload })
})

class Home extends React.Component {
  // This function is invoked immediately before the component is rendered, which is used for the HTTP articles request.
  componentWillMount() {
    // A component can call this.props.onLoad() to fire off an event with type 'HOME_PAGE_LOADED' and a 'payload', which is the Promise from our request.
    this.props.onLoad(agent.Articles.all())
  }

  render() {
    return (
      <div className="home-page">

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
