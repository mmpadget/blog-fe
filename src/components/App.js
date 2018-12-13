import React from 'react'
// import { connect } from 'react-redux'
// import { Route } from 'react-router'
import { Provider } from 'react-redux'
// import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
// import Login from './Login'
import store from '../store'

// const mapStateToProps = state => ({
//   appName: state.appName
// })

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header appName={this.props.appName} />
//         <Home />
//       </div>
//     )
//   }
// }

// Home component is represented by the props.children property.
// A <Router> may have only one child element.
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Route exact path="/" component={Home} />
          </Router>
        </Provider>
      </div>
    )
  }
}

// <BrowserRouter>
//   <Route exact path='/' component={Home} />
// </BrowserRouter>

// <Provider store={store}>
//   <Router>
//     <Route exact path="/" component={Home} />
//     <Route path="/login" component={Login} />
//   </Router>
// </Provider>

// Tells react-router to attach the children property to this component's props.
// App.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

// export default connect(mapStateToProps, () => ({}))(App)
export default App
