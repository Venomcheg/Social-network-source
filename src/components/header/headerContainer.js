import React from "react"
import Header from "./header"
import { connect } from "react-redux"
import { getAuthUserData, logout } from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
  }
}
export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)
