import React, { Suspense } from "react"

import ModuleStyle from "./main.module.scss"

import UsersContainer from "./users"
import { Redirect, Route, Switch } from "react-router-dom"
import SuspenseHoc from "../../hoc/Suspense"
const Dialogs = React.lazy(() => import("./dialogs"))
const ProfileContainer = React.lazy(() => import("./profile"))
const Login = React.lazy(() => import("./login/login"))
const Main = () => {
  return (
    <div className={ModuleStyle.wrapper}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/profile" />
        </Route>
        <Route path="/profile/:userId?" render={SuspenseHoc(ProfileContainer)} />
        <Route path="/dialog" render={SuspenseHoc(Dialogs)} />
        <Route path="/users" render={SuspenseHoc(UsersContainer)} />
        <Route path="/login" render={SuspenseHoc(Login)} />
        <Route path="*" render={() => <div>404 Error</div>} />
      </Switch>
    </div>
  )
}

export default Main
