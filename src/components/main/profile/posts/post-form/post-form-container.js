import { addPost } from "../../../../../redux/profile-reducer"
import PostForm from "./post-form"
import { connect } from "react-redux"

let mapStateToProps = (state) => {
  return {
    newPostText: state.profileReducer.newPostText,
  }
}
const PostFormContainer = connect(mapStateToProps, { addPost })(PostForm)

export default PostFormContainer
