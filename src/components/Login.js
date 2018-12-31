import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ListErrors from './ListErrors'
import agent from '../agent'

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onSubmit: (email, password) => {
    const payload = agent.Auth.register(email, password)
    dispatch({ type: 'REGISTER', payload })
  }
})

class Login extends React.Component {
  constructor() {
    super()
    this.changeEmail = event => this.props.onChangeEmail(event.target.value)
    this.changePassword = event => this.props.onChangePassword(event.target.value)
    this.submitForm = (email, password) => event => {
      event.preventDefault()
      this.props.onSubmit(email, password)
    }
  }

  render() {
    // const email = this.props.email
    // const password = this.props.password
    const { email, password } = this.props

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">

              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="register">
                  Need an account?
                </Link>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(email, password)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword} />
                  </fieldset>
                  { /* TODO: inProgress prop */}
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
