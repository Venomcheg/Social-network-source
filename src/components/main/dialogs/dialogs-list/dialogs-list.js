import React from "react"
import { NavLink } from "react-router-dom"

import DialogsItem from "./dialogs-item"

const DialogsList = (state) => {
  return (
    <ul>
      {state.dialogs.map((item) => {
        return <DialogsItem name={item.name} key={item.id} />
      })}
    </ul>
  )
}

export default DialogsList
