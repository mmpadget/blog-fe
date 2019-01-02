import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import ListErrors from './ListErrors'
import agent from '../agent'

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: 'LOGOUT' }),
  onSubmitForm: user =>
    dispatch({ type: 'SETTINGS_SAVED', payload: agent.Auth.save(user) })
})

// Store the state of the form within the component.
class SettingsForm extends React.Component {
  constructor() {
    super()

    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    }

    // React component state doesn't necessarily have to go through redux.
    this.updateState = field => event => {
      const state = this.state
      // Given a field and an event, update the state's value for that field to the event's target value.
      const newState = Object.assign({}, state, { [field]: event.target.value })
      // Call react set state function.
      this.setState(newState)
    }

    this.submitForm = event => {
      // Prevent event from bubbling.
      event.preventDefault()

      // Get the user.
      const user = Object.assign({}, this.state)
      // If no password set, delete it.
      if (!user.password) {
        delete user.password
      }

      // When the user submits the form, pass the data out of the component. Pass the user out of the form.
      this.props.onSubmitForm(user)
    }
  }

  // We don't want the form to be blank when the user loads. Check if there's a current user and initialize our state.
  componentWillMount() {
    // Check if we have a current user.
    if (this.props.currentUser) {
      // If so, initialize our state.
      Object.assign(this.state, {
        image: this.props.currentUser.image || '',
        username: this.props.currentUser.username,
        bio: this.props.currentUser.bio,
        email: this.props.currentUser.email
      })
    }
  }

  // If the current user changes, we'll update the form with the new information. Current user may update after this component has been mounted.
  componentWillReceiveProps(nextProps) {
    if(nextProps.currentUser) {
      this.setState(Object.assign({}, this.state, {
        image: nextProps.currentUser.image || '',
        username: nextProps.currentUser.username,
        bio: nextProps.currentUser.bio,
        email: nextProps.currentUser.email
      }))
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <fieldset>

          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="URL of profile picture"
              value={this.state.image}
              onChange={this.updateState('image')} />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.updateState('username')} />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="8"
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.updateState('bio')}>
            </textarea>
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateState('email')} />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="New Password"
              value={this.state.password}
              onChange={this.updateState('password')} />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.state.inProgress}>
            Update Settings
          </button>

        </fieldset>
      </form>
    )
  }
}

class Settings extends React.Component {
  render() {
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">

              <h1 className="text-xs-center">Your Settings</h1>

              <ListErrors errors={this.props.errors}></ListErrors>

              <SettingsForm
                currentUser={this.props.currentUser}
                onSubmitForm={this.props.onSubmitForm} />

              <hr />

              <button
                className="btn btn-outline-danger"
                onClick={this.props.onClickLogout}>
                Or click here to logout.
              </button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
