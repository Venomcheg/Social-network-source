import React from "react"

import { connect } from "react-redux"
import Dialogs from "./dialogs"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux"

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsReducer.messages,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {}
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
