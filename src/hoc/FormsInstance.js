import React from "react"
import { Field } from "redux-form"
import styled from "styled-components"

const Textarea = styled.textarea`
  border: ${(meta) => (meta.error && meta.touched ? "red" : "black")} 2px solid;
  outline: none;
`

const Error = styled.p`
  display: ${(meta) => (meta.error && meta.touched ? "block" : "none")};
  color: red;
`
let Element = (Element) => ({ input, meta, ...props }) => {
  return (
    <>
      <Textarea as={Element} {...input} {...props} {...meta}></Textarea>
      <Error {...meta}>{meta.error}</Error>
    </>
  )
}

export const CreateField = (
  name,
  validators,
  component,
  placeholder = "",
  type = "text"
) => (
  <Field
    type={type}
    placeholder={placeholder}
    name={name}
    validate={validators}
    component={Element(component)}
  />
)
