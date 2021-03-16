import React from "react"
import { NavLink } from "react-router-dom"

import DialogsStyle from "./dialogs-item.module.scss"
const DialogsItem = (props) => {
  return (
    <li className={DialogsStyle.text}>
      <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
    </li>
  )
}

export default DialogsItem
