const ADD_MESSAGE = "ADD_MESSAGE"

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Andrew",
    },
    { id: 2, name: "Max" },
    { id: 3, name: "Nikita" },
    { id: 4, name: "Dimich" },
    { id: 5, name: "Mary" },
    { id: 6, name: "Tom" },
  ],

  messages: [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "How are you?",
    },
    {
      id: 3,
      message: "Welcome back",
    },
    {
      id: 4,
      message: "Goodbye",
    },
    {
      id: 5,
      message: "We are on our way",
    },
    {
      id: 6,
      message: "No chance",
    },
  ],
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      }
    }

    default:
      return state
  }
}
export const addMessageActionCreator = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
})

export default dialogsReducer
