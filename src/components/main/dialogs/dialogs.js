import React from "react"
import { Redirect } from "react-router-dom"

import DialogsList from "./dialogs-list"
import DialogsMessages from "./dialogs-messages"
import DialogsMessagesNew from "./dialogs-messages-new"
import DialogsStyles from "./dialogs.module.scss"

const Dialogs = (state) => {
  return !state.isAuth ? (
    <Redirect to={`login`} />
  ) : (
    <div>
      <h2 className={DialogsStyles.title}>Last messages</h2>
      <div className={DialogsStyles.wrapper}>
        <DialogsList />
        <div>
          {state.messages.map((item) => (
            <DialogsMessages message={item.message} key={item.id} />
          ))}
        </div>
      </div>
      <DialogsMessagesNew />
    </div>
  )
}

export default Dialogs
