import React from "react"
import { addMessageActionCreator } from "../../../../redux/dialogs-reducer"
import DialogsMessagesNew from "./dialogs-messages-new"
import { connect } from "react-redux"

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsReducer.newMessageText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    newText: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody))
    },
  }
}
const DialogsMessagesNewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsMessagesNew)
export default DialogsMessagesNewContainer
