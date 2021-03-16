import React from "react"
import { connect } from "react-redux"
import {
  follow,
  unFollow,
  setCurrentPage,
  requestUsers,
} from "../../../redux/users-reducer"
import Users from "./users"
import Preloader from "../../common"
import { compose } from "redux"
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getUsers,
  getUsersCount,
} from "../../../redux/users-selectors"
class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize)
  }
  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props
    this.props.getUsers(pageNumber, pageSize)
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersReducer.users,
//     pageSize: state.usersReducer.pageSize,
//     currentPage: state.usersReducer.currentPage,
//     isFetching: state.usersReducer.isFetching,
//     followingInProgress: state.usersReducer.followingInProgress,
//   }
// }
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    totalUsersCount: getUsersCount(state),
  }
}
export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    getUsers: requestUsers,
  })
)(UsersContainer)
