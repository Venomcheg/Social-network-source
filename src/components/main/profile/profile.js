import React from "react"
import PostFormContainer from "./posts"
import User from "./user"
const Profile = (props) => {
  return (
    <>
      <User {...props} />
      <PostFormContainer />
    </>
  )
}

export default Profile
