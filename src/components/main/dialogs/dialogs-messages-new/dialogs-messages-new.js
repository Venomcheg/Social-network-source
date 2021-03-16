import React from "react"
import { Field, reduxForm } from "redux-form"
import { CreateField } from "../../../../hoc/FormsInstance"
import { required } from "../../../../utils/validators/validators"
import styles from './dialogs-messages-new.module.scss'

const DialogsMessagesNew = (props) => {
  const addNewMessage = (values) => {
    props.newText(values.newMessageBody)
  }

  return (
    <div>
      <h2 className={styles.title}>New message</h2>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {CreateField(
          "newMessageBody",
          [required],
          "textarea",
          "Enter your message",
          null
        )}
      </div>
      <div>
        <button className={"btn"}>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
)

export default DialogsMessagesNew
