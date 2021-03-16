import { profileAPI } from "../api/api"

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SET_PHOTO = "SET_PHOTO"
let initialState = {
  posts: [
    {
      id: 1,
      text: "Why suspense don't work?",
      img:
        "https://image.shutterstock.com/image-photo/roman-legionary-soldier-army-reenactment-600w-789836029.jpg",
      likesCount: 1,
    },
    {
      id: 2,
      text: "Why Redux is so hard?",
      img:
        "https://turningpointsoftheancientworld.com/wp-content/uploads/2018/08/Augustan-legionary3-1-672x372.jpg",
      likesCount: 11,
    },
    {
      id: 3,
      text: "How to create node server API?",
      img: "https://cdn.wallpapersafari.com/46/90/i5B8yG.jpg",
      likesCount: 14,
    },
  ],
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let body = action.newPost
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 6,
            text: body,
            img: "https://cdn.wallpapersafari.com/46/90/i5B8yG.jpg",
            likesCount: 90,
          },
        ],
      }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case SET_PHOTO: {
      return { ...state, profile: { ...state.profile, photos: action.photos } }
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id != action.postId),
      }
    }
    default:
      return state
  }
}
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
})
export const addPost = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})
export const savePhotoSuccess = (photos) => ({ type: SET_PHOTO, photos })
export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  } catch (error) {
    alert(error)
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  debugger
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export default profileReducer
