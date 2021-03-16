import React from "react"
import { create } from "react-test-renderer"
import StatusProfile from "./statusProfile"

describe("ProfileStatus component", () => {
  test("status in the props should be in the state", () => {
    const component = create(<StatusProfile status="it-kamasutra.com" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe("it-kamasutra.com")
  })
  test("after creation <span> with status should be displayed with correct status", () => {
    const component = create(<StatusProfile status="it-kamasutra.com" />)
    const instance = component.getInstance()
    let span = instance.findByType("span")
    expect(span.length).toBe(1)
  })
  // test("after creation <span> should contains correct status", () => {
  //   const component = create(<StatusProfile status="it-kamasutra.com" />)
  //   const instance = component.getInstance()
  //   let span = instance.findByType("span")
  //   expect(span.length).toBe(1)
  // })
})