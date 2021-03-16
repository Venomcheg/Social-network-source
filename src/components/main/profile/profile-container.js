import React from "react"
import Profile from "./profile"
import { connect } from "react-redux"
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from "../../../redux/profile-reducer"
import { withRouter } from "react-router-dom"
import { compose } from "redux"

class ProfileContainer extends React.Component {
  refreshProfile() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.match.params.userId != prevProps.match.params.userId &&
      this.refreshProfile()
  }
  render() {
    return (
      <section>
        <Profile
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
        />
      </section>
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorizedUserId: state.authReducer.userId,
  isAuth: state.authReducer.isAuth,
})
export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }),
  withRouter
)(ProfileContainer)
