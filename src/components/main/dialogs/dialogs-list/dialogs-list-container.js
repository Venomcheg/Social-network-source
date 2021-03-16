import React from "react"

import DialogsList from "./dialogs-list"
import { connect } from "react-redux"
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {}
}
const DialogsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsList)
export default DialogsListContainer
