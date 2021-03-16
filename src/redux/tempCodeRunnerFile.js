import ReactDOM from "react-dom"
import React from "react"
import profileReducer, { addPost, deletePost } from "./profile-reducer"
let state = {
  posts: [
    {
      id: 1,
      text: "How are you doing?",
      img:
        "https://image.shutterstock.com/image-photo/roman-legionary-soldier-army-reenactment-600w-789836029.jpg",
      likesCount: 1,
    },
    {
      id: 2,
      text: "Why are we living?",
      img:
        "https://turningpointsoftheancientworld.com/wp-content/uploads/2018/08/Augustan-legionary3-1-672x372.jpg",
      likesCount: 11,
    },
    {
      id: 3,
      text: "Why are you worthless?",
      img: "https://cdn.wallpapersafari.com/46/90/i5B8yG.jpg",
      likesCount: 14,
    },
  ],
}
// it("length of posts should be incremented", () => {
//   let action = addPost("it-kamasutra.com")
//   let newState = profileReducer(state, action)
//   expect(newState.posts.length).toBe(4)
//   expect(newState.posts[3].text).toBe("it-kamasutra.cm")
// })
it("after deleting length of messages should be decremented", () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(2)
})