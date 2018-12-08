import React from 'react'
// import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'
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
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={Home} />
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

// Tells react-router to attach the children property to this component's props.
// App.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

// export default connect(mapStateToProps, () => ({}))(App)
export default App
