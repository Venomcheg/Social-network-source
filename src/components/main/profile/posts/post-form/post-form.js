import React from "react"
import { Field, reduxForm } from "redux-form"
import { CreateField } from "../../../../../hoc/FormsInstance"
import {
  required,
  maxLengthCreator,
} from "../../../../../utils/validators/validators"
import Form from "./post_form.module.scss"

let maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
  const addNewPost = (values) => {
    props.addPost(values.newPostBody)
  }
  return (
    <div>
      <h2 className={Form.title}>New post</h2>
      <AddPostFormRedux onSubmit={addNewPost} />
    </div>
  )
}

const AddPostForm = (props) => {
  return (
    <section className={Form.wrapper}>
      <form className={Form.form_Block} onSubmit={props.handleSubmit}>
        <div>
          {CreateField(
            "newPostBody",
            [required, maxLength10],
            "textarea",
            "Post message",
            null
          )}
        </div>
        <button className="btn">Send</button>
      </form>
    </section>
  )
}

const AddPostFormRedux = reduxForm({ form: "postAddForm" })(AddPostForm)

export default PostForm
