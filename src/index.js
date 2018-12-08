import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

import App from './components/App'
// import store from './store'
import * as serviceWorker from './serviceWorker'

// import { Router, Route, IndexRoute, HashRouter } from 'react-router'

// import Home from './components/Home'
// import Login from './components/Login'
// import store from './store'

// ReactDOM.render((
//   <Provider store={store}>
//     <App />
//   </Provider>
//   ), document.getElementById('root'));

// With React Router v4 there are a number of different router components. Each one will create a history object for you. The <BrowserRouter> creates a browser history and the <HashRouter> creates a hash history.
// ReactDOM.render((
//   <Provider store={store}>
//     <Router history={hashHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Home} />
//         <Route path="login" component={Login} />
//       </Route>
//     </Router>
//   </Provider>
//   ), document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
