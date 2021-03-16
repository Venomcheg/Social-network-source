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
    const root = component.root
    let span = root.findByType("span")
    expect(span.length).not.toBeNull()
  })
  test("after creation <input> shouldn't exist", () => {
    const component = create(<StatusProfile status="it-kamasutra.com" />)
    const root = component.root

    expect(() => {
      let input = root.findByType("input")
    }).toThrow()
  })
  test("after creation <span> should contains correct status", () => {
    const component = create(<StatusProfile status="it-kamasutra.com" />)
    const root = component.root
    let span = root.findByType("span")
    expect(span.children[0]).toBe("it-kamasutra.com")
  })
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<StatusProfile status="it-kamasutra.com" />)
    const root = component.root
    let span = root.findByType("span")
    span.props.onClick()
    let input = root.findByType("input")

    expect(input.props.value).toBe("it-kamasutra.com")
  })
  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(
      <StatusProfile status="it-kamasutra.com" updateStatus={mockCallback} />
    )
    const instance = component.getInstance()
    instance.changeEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
