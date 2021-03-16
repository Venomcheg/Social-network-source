import React from "react"
import Main from "./components/main/main"
import Navigation from "./components/navigation/navigation"
import "./App.scss"
import { HashRouter, withRouter } from "react-router-dom"
import HeaderContainer from "./components/header/headerContainer"
import { connect, Provider } from "react-redux"
import { initializeApp } from "./redux/app-reducer"
import Preloader from "./components/common"
import { compose } from "redux"
import store from "./redux/redux-store"

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    console.log(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navigation />
        <div className="app-wrapper-content">
          <Main />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized,
})

let AppWithRouter = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

let JSApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppWithRouter />
      </Provider>
    </HashRouter>
  )
}

export default JSApp
