import React from "react"
import { NavLink } from "react-router-dom"

import style from "./header.module.scss"

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout} className={style.log_out}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>{props.isAuth ? props.login : `Login`}</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
