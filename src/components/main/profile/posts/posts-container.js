import { connect } from "react-redux"
import Posts from "./posts"

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
  }
}

const PostsContainer = connect(mapStateToProps)(Posts)
export default PostsContainer
