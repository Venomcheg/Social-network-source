import React from "react"
import styled from "styled-components"
import preloaderStyle from "./preloader.module.scss"

const Preloader = () => {
  return (
    <div className={preloaderStyle.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Preloader
