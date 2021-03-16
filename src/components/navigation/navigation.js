import React from "react"
import {BrowserRouter, NavLink} from "react-router-dom"
import Nav from "./navigation.module.scss"

const Navigation = () => {
  return (
    <nav className={Nav.nav}>
      <ul>
        <NavLink to="/profile" activeClassName={Nav.active}>
          <li className={Nav.item}>
            <div className={Nav.icon}>
              <img src={process.env.PUBLIC_URL + '/img/icons/profile.png'} alt="profile" width={"25px"}/>
            </div>
            <p className={Nav.navText}>
              Profile
            </p>
          </li>
        </NavLink>
        <NavLink to="/dialog" activeClassName={Nav.active}>
          <li className={Nav.item}>
            <div className={Nav.icon}>
              <img src={process.env.PUBLIC_URL + '/img/icons/messages.png'} alt="profile" width={"25px"}/>
            </div>
            <p className={Nav.navText}>
              Messages
            </p>
          </li>
        </NavLink>
        <NavLink to="/users" activeClassName={Nav.active}>
          <li className={Nav.item}>
            <div className={Nav.icon}>
              <img src={process.env.PUBLIC_URL + '/img/icons/users.png'} alt="profile" width={"25px"}/>
            </div>
            <p className={Nav.navText}>
              Users
            </p>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navigation
